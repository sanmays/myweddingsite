import React from 'react';
import './Rsvp.css';
// import './Landing.js';

const Rsvp = ({onRouteChange}) => {
	return (
		<div classname='registerForm'style={{'padding-top':'15vh'}}>
			<article className="br2 ba mv w-100 w-50-m mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="lastName">Last Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastName"  id="lastName" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" for="firstName">First Name</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstName"  id="firstName" />
				      </div>
	{/*			      <div className="mv3">
				        <label className="db fw6 lh-copy f6" for="numGuest">Number of Guests</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="numGuest"  id="numGuest" min="1" max="10"/>
				      </div>*/}
				    </fieldset>
				    <div className="">
				      <input
				      	onClick={() => onRouteChange('App')} 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
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

export default Rsvp;