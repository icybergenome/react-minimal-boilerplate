import React, {PureComponent} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import {withRouter} from 'react-router-dom'

class Fetch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.backToHome=this.backToHome.bind(this)
    }
  backToHome(){
        this.props.history.push('/');
  }
  componentDidMount(){
        console.log("qwe");
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data =>this.setState({data}))
        .catch(error => console.log("error"))
  }
   render() {
    const data = this.state.data;
      return(
        <div>
             <div> 
                 <Button props={{label: "Home", functions: this.backToHome,color:"primary"}} />
            </div>
            <Display props={data}/>
        </div>
      )
    }

}
  
export default withRouter(Fetch)

