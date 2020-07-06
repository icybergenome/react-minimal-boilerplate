import React, {PureComponent} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import LoadingSpinner from './LodingSpinner'
import ErrorBar from './ErrorBar'

@inject('DataStore')
@observer
class Fetch extends PureComponent {
    constructor(props) {
        super(props);
        this.backToHome=this.backToHome.bind(this)  
    }
  backToHome(){ 
        this.props.history.push('/');
  }
  componentDidMount(){
        this.props.DataStore.setFetchingStatus({fetchingData:false, data:[], fetchError:''})
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then((data) =>{
          this.props.DataStore.setFetchingStatus({fetchingData:true, data:data, fetchError:''})})
        .catch(error => 
          this.props.DataStore.setFetchingStatus({fetchingData:true, data:[], fetchError:error})
        )
  }
   render() {
    const fetchedStatus = this.props.DataStore.getFetchingStatus[0]
    if(fetchedStatus.fetchingData == false)
    {
      return(
        <LoadingSpinner />
      )
    }
    if(fetchedStatus.fetchError !== "" && fetchedStatus.fetchingData == true)
    {
      return(
        <ErrorBar error={fetchedStatus.fetchError} />
      )
    }
    const data =fetchedStatus.data;
      return(
        <div>
             <div> 
                 <Button btnData={{label: "Home", functions: this.backToHome,color:"primary"}} />
            </div>
            <Display imgData={data}/>
        </div>
      )
    }

}
  
export default withRouter(Fetch)