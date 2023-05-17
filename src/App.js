
import React from "react";
import './App.css';
import Login from "./components/Login"
import Home from "./components/Home"
import {connect} from "react-redux"

class App extends React.Component {

  constructor(props){
    super(props)

  }

  render(){
    if(this.props.isAuthorized==false){
      return(<Login />)
    }
    else{
      return(<Home />)
    }
  }
}

const mapStateToProps =  state => {
   return {

         ...state,
         isAuthorized : state.isAuthorized

   }
}

export default connect(mapStateToProps, null)(App)
