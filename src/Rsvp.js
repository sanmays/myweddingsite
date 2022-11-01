import React from 'react';
import './Rsvp.css';
import { guestsSG } from './guestsSG.js'


class Rsvp extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			guestsSG: guestsSG,
			id: '',
			lastNameMatch: '',
			firstNameMatch: ''
		}
	}

	onLastNameChange = (event) => {
		this.setState({lastName: event.target.value});

	}

	onFirstNameChange = (event) => {
		this.setState({firstName: event.target.value});
		
	}

	onSubmitRegister = () => {

		const lastNameMatch = this.state.guestsSG.filter(guestsSG =>{
			return guestsSG.LastName.toLowerCase().includes(this.state.lastName.toLowerCase());
		})

		const firstNameMatch = this.state.guestsSG.filter(guestsSG =>{
			return guestsSG.FirstName.toLowerCase().includes(this.state.firstName.toLowerCase());
		})


		let userValid = false;
		while((lastNameMatch.length < guestsSG.length) && (firstNameMatch.length < guestsSG.length)){
			for (let i = 0; i<lastNameMatch.length; i++){
		 		for (let j = 0; j<firstNameMatch.length; j++){
		 			if (lastNameMatch[i].id === firstNameMatch[j].id) {
		 				console.log(i, j);
		 				userValid = true;
		 				break;
		 			} else {
		 				continue;
		 			}
	 			}
	 		}
	 		break;
		} 

		if (userValid === true){
			this.props.onRouteChange('MumbaiInfo')
		} else {
			alert('Your last or first name or both could not be validated. Please make sure you entered the correct name.');
	 		this.props.onRouteChange('Rsvp');
		}
	 	console.log(userValid);
		
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