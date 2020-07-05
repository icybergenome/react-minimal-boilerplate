import React, {PureComponent} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import {withRouter} from 'react-router-dom'
import {inject, observer} from 'mobx-react'

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
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data =>this.props.DataStore.setData(data))
        .catch(error => console.log("error"))
  }
   render() {
    const data = this.props.DataStore.getData;
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