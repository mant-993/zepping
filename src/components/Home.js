import React from 'react'
import "./styles/Home.css"
import {connect} from "react-redux"
import {log} from '../store/Action'


class Home extends React.Component{

	constructor(props){
		super(props)

		this.logOut=this.logOut.bind(this)
	}

	logOut(e){
		e.preventDefault()
		this.props.log("false")
		window.location.reload();
	}

	render(){
		return(
			<div class="flex-column">
				<button type="button" class="btn-primary active" onClick={e => this.logOut(e)}>Logout</button>
			</div>

		)
	}
}

const mapStateToProps =  state => {
   return {

         ...state,
         isAuthorized : state.isAuthorized

   }
}

export default connect(mapStateToProps, {log})(Home);