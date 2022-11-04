import React from 'react';
import './PuneInfo.css';
import './Button.css';
import icons_tent from './images/icons_tent.svg';
import icons_watch from './images/icons_watch.svg';
import icons_mountains from './images/icons_mountains.svg';

const PuneInfo = ({onRouteChange}) => {
  return (
    <div className='zone'>
	    <div className='tc'>
	      <img className='imgageWho'src={icons_tent} alt="who icon" />
	      <h2 className='headerWho'style={{display: 'flex', justifyContent: 'center'}}>WHO</h2>
	      <p className='larger'style={{'marginBottom': '2px'}}>Our dearest</p>
	      <p className='larger'style={{'marginTop': '2px'}}>Friends & Family</p>
	    </div>
	    <div className='pane-row-when'>
	    	<div className='when'>
	    		<div className='title-section'>
	    		  <img className='imgageWhen'src={icons_watch} alt="when icon" />
			      <h2 className='headerWhen'>WHEN</h2>
			    </div>
			    <p className='larger' style={{'marginBottom': '2px'}}>11th December</p>
			    <p className='larger' style={{'marginTop': '2px'}}>2022</p>
			    <button 
		            className='calendarButton grow dib black bg-493c06'  
		            type="button"
		            onClick= {() => window.open('https://calendar.google.com/calendar/u/0/r/day/2022/12/11', '_blank','noreferrer')}>
		            Calendar
		        </button>
		    </div>
	    </div>
	   	<div className='pane-row-where'>
	    	<div className='where'>
	    		<div className='title-section'>
	    		  <img className='imgageWhere'src={icons_mountains} alt="where icon" />
			      <h2 className='headerWhere'>WHERE</h2>
			    </div>
			    <p className='larger' style={{'marginBottom': '0px'}}>Marigold Banquet</p>
			    <p className='larger'style={{'marginTop': '0px'}}>Pune</p>
			    <button 
		            className='mapsButton grow dib black bg-493c06'  
		            type="button"
		            onClick= {() => window.open('https://www.google.co.in/maps/dir//Marigold+Banquet+and+Conventions,+Opp,+Windmill+Village+Rd,+Windmill+Village,+Bavdhan,+Pune,+Maharashtra+411021,+India/@18.5069149,73.7610351,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bc2bf1dc68302ad:0x5ee8a5f645251e74!2m2!1d73.7632238!2d18.5069149!3e0?hl=en',
		            											'_blank', 'noreferrer')}>
		            See on Maps
		      </button>
		    </div>
	    </div>
	    <div className='pane-row-rsvp'>
	    	<div className='rsvp'>
	    		<div className='title-section underline'>
			      <h2 className='rsvp-larger pointer'
			      onClick= {() => window.open('https://sanshinepune.rsvpify.com', '_blank', 'noreferrer')}>RSVP
			      </h2>
			    </div>
			    <p className='smaller' style={{'marginBottom': '2px'}}>Please RSVP by 1st December 2022</p>
		    </div>
	    </div>
	</div>
    );
}




export default PuneInfo;

