import React, { Component } from 'react';
import './Button.css';
import 'tachyons';


const Button = ({ onClick }) => {
	 const [count, setCount] = React.useState(0);

	const handleClick = () => {
		setCount(count + 1);
		console.log(count);
	};

	return(
		<div className='pa3'>
			<button 
				className='rsvpButton grow f3 ph3 dib black bg-transparent pointer'  
				type="button" onSubmit={onClick}
				onClick={handleClick}>
				RSVP
			</button>
			
		</div>
		);
}

export default Button;


