import React from 'react';
import './Rsvp.css';
import { guestsSG } from './guestsSG.js'
import { guestsSS } from './guestsSS.js'


class Rsvp extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			guestsSG: guestsSG,
			guestsSS: guestsSS,
			id: '',
			lastNameMatchMum: '',
			firstNameMatchMum: '',
			lastNameMatchPun: '',
			firstNameMatchPun: ''
		}
	}

	onLastNameChange = (event) => {
		this.setState({lastName: event.target.value});

	}

	onFirstNameChange = (event) => {
		this.setState({firstName: event.target.value});
		
	}

	onSubmitRegister = () => {

		
		// check if user is in Mumbai Guest list
		const lastNameMatchMum = this.state.guestsSG.filter(guestsSG =>{
			return guestsSG.LastName.toLowerCase().includes(this.state.lastName.toLowerCase());
		})

		const firstNameMatchMum = this.state.guestsSG.filter(guestsSG =>{
			return guestsSG.FirstName.toLowerCase().includes(this.state.firstName.toLowerCase());
		})


		let userValidMum = false;
		while((lastNameMatchMum.length < guestsSG.length) && (firstNameMatchMum.length < guestsSG.length)){
			for (let i = 0; i<lastNameMatchMum.length; i++){
		 		for (let j = 0; j<firstNameMatchMum.length; j++){
		 			if (lastNameMatchMum[i].id === firstNameMatchMum[j].id) {
		 				userValidMum = true;
		 				break;
		 			} else {
		 				continue;
		 			}
	 			}
	 		}
	 		break;
		}



		// check if user is in Pune Guest list
		const lastNameMatchPun = this.state.guestsSS.filter(guestsSS =>{
			return guestsSS.LastName.toLowerCase().includes(this.state.lastName.toLowerCase());
		})

		const firstNameMatchPun = this.state.guestsSS.filter(guestsSS =>{
			return guestsSS.FirstName.toLowerCase().includes(this.state.firstName.toLowerCase());
		})

		let userValidPun = false;
		while((lastNameMatchPun.length < guestsSS.length) && (firstNameMatchPun.length < guestsSS.length)){
			for (let i = 0; i<lastNameMatchPun.length; i++){
		 		for (let j = 0; j<firstNameMatchPun.length; j++){
		 			if (lastNameMatchPun[i].id === firstNameMatchPun[j].id) {
		 				userValidPun = true;
		 				break;
		 			} else {
		 				continue;
		 			}
	 			}
	 		}
	 		break;
		}

		// Lead to the correct page

		if ((userValidMum === true) && (userValidPun === true)){
			this.props.onRouteChange('MumbaiPuneInfo')
		} else if (userValidMum === true){
			this.props.onRouteChange('MumbaiInfo')
			console.log('Pune guest')
		} else if (userValidPun === true){
			this.props.onRouteChange('PuneInfo')
		} else {
			alert('Your last or first name or both could not be validated. Please make sure you entered the correct name.');
	 		this.props.onRouteChange('Rsvp');
		}
	 	
		
	}

	render() {

		return (
				<div className='registerForm'style={{'paddingTop':'10vh', 'paddingLeft':'5vw', 'paddingRight':'5vw'}}>
					<article className="br2 ba mv w-100 w-50-m mw6 shadow-5 center">
						<main className="pa4 black-80">
						  <div className="measure center">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f4 fw6 ph0 mh0 center">Register</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f4" htmlFor="lastName">First Name</label>
						        <input 
						        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="search" 
						        name="lastName"  
						        id="lastName" 
						        onChange={this.onFirstNameChange}
						        />
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy f4" htmlFor="firstName">Last Name</label>
						        <input 
						        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="text" 
						        name="firstName"  
						        id="firstName" 
						        onChange={this.onLastNameChange}
						        />
						      </div>
						    </fieldset>
						    <div className="">
						      <input
						      	onClick={this.onSubmitRegister} 
						      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib black" 
						      	type="submit" 
						      	value="Submit"
						      	 />
						    </div>
						  </div>
						</main>
					</article>
				</div>
			);
	}
}

export default Rsvp;