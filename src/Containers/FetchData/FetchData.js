import React, {Component} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import {withRouter} from 'react-router-dom'
import {fetchData} from '../../redux/action'
import {connect} from 'react-redux'
import {getData, getError, pending} from '../../redux/reducer';
class Fetch extends Component{
    constructor(props) {
      console.log("props areeeeeeeeee ", props)
        super(props);
        this.state = {value: []};
        this.backToHome=this.backToHome.bind(this)
      
    }
  backToHome(){ 
        this.props.history.push('/');
  }
  componentDidMount(){
        const {sendTheAlert} = this.props
        console.log("this.props", this.props)
        sendTheAlert()
        
  }

  shouldComponentUpdate(){
    console.log("here")
    console.log(this.props)
    const { fetchingData} = this.props
    if(fetchingData === false)
    {
      return true
    }
    return false
  }
   render() {
    const data = this.state.value;
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
const mapStateToProps = (state) => {
  const {data, fetchingData, fetchError} = state
  console.log("data is ", data, " and status is ", fetchingData, " error is ", fetchError)
  return {
    data,
    fetchingData,
    fetchError

  };
};

const mapDispatchToProps = (dispatch) => {
  
  return({
    sendTheAlert: () => {dispatch(fetchData())}
})
};


  
export default connect(mapStateToProps, mapDispatchToProps)(Fetch)
