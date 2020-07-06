import React, {Component} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import {fetchData} from '../../redux/actions/fetchData'
import {connect} from 'react-redux'
import Loading from './Spinner'
import ErrorBar from './Snackbar'
import {withRouter} from 'react-router-dom'

class Fetch extends Component{
    constructor(props) {
        super(props);
        this.state = {galleryData: []};
        this.backToHome=this.backToHome.bind(this)
    }
  backToHome(){ 
        this.props.history.push('/');
  }
  componentDidMount(){
        const {fetchingGallery} = this.props
        fetchingGallery()
  }
componentDidUpdate(prevProps){  
 if(prevProps.data !== this.props.data)
 {
   this.setState({galleryData: [this.props.data]})
 }
}
   render() {
    if(this.state.galleryData[0] == undefined)
    {
     return(<Loading />)
    }
    else if(this.props.fetchingData == false && this.props.fetchError !== "")
    {
      return(<ErrorBar error={this.props.fetchError}/>)
    }
    return(
        <div>
             <div> 
                 <Button btnData={{label: "Home", functions: this.backToHome,color:"primary"}} />
            </div>
            <Display imgData={this.state.galleryData[0]}/>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
  const {data, fetchingData, fetchError} = state.fetchData
  return {
    data,
    fetchingData,
    fetchError

  };
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchingGallery: () => {dispatch(fetchData())}
})
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fetch))
