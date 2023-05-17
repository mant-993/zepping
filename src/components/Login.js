import React from 'react'
import "./styles/Login.css"
import zeppingLogo from './images/zepping.png';
import {connect} from "react-redux"
import {log} from '../store/Action'

class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
		}

		this.setInput = this.setInput.bind(this)
		this.logIn = this.logIn.bind(this)
	}


	setInput(e){
		var id = e.target.id;
		const value = e.target.value;

		
		switch(id){
			case 'email':
				this.setState({email: value})
				break;
			case 'password':
				this.setState({password: value})
				break;
			default:
				break;
		}

	}

	async logIn(e){
		e.preventDefault();
		const request = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({	email:this.state.email,
	        					    password: this.state.password})
	    };
	    const response = await fetch('https://sicce-test.thingscloud.it/api/mobile/login', request)
	    const data = await response.json();
	    const result=data.result
    	this.props.log(result)
    	if(!result){alert("Autenticazione Fallita")}

	}

	render(){
		return(
			<div className="container">
				<div>
					<img className="mx-auto d-block" src={zeppingLogo} width="120" height="60" alt="zepping-logo"/>
					<form className="form-group">
						<input className="form-control" type="text" id="name" placeholder="Nome" />

						<input className="form-control" type="text" id="surname" placeholder="Cognome" />

						<input 
							className="form-control" 
							type="text" id="email" 
							placeholder="E-mail" 
							onChange={e => this.setInput(e)}
							value={this.state.email} />

						<input 
							className="form-control" 
							type="password" id="password" 
							placeholder="Password" 
							onChange={e => this.setInput(e)}
							value={this.state.password} />

						<select className="form-select" id="country" aria-label="Default select example">
						  <option>Nazionalità</option>
						  <option>🇮🇹 Italia </option>
						  <option>🇫🇷 Francia</option>
						  <option>🇩🇪 Germania</option>
						</select>

						<div className="form-check mt-4 justify-content">
						  <input className="form-check-input" type="checkbox" />
						  <span><label className="form-check-label">Ricordami</label></span>
						  <span style={{marginLeft:15, fontSize:12}}><a href="/"><b>password dimenticata?</b></a></span>
						</div> 

						<div className="loginForm">
							<button 
								type="submit" 
								className="btn btn-primary w-100" 
								onClick={e => this.logIn(e)}
							>Login</button>
						</div>

						<div className="registrationForm text-center">
							<label className="mt-5">Non hai un account?</label>
							<button type="submit" className="btn btn-primary w-100">Registrati</button>
						</div>
					</form>
				</div>
			</div>

		)
	}
}

export default connect(null, {log})(Login);