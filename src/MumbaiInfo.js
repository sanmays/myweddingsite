import React from 'react';
import './MumbaiInfo.css';
import './Button.css';
import icons_tent from './images/icons_tent.svg';
import icons_watch from './images/icons_watch.svg';
import icons_mountains from './images/icons_mountains.svg';

const MumbaiInfo = ({onRouteChange}) => {
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
			    <p className='larger' style={{'marginBottom': '2px'}}>9th December</p>
			    <p className='larger' style={{'marginTop': '2px'}}>2022</p>
			    <button 
		            className='calendarButton grow dib black bg-493c06'  
		            type="button"
		            onClick= {() => window.open('https://calendar.google.com/calendar/u/0/r/day/2022/12/9?pli=1, _blank','noreferrer')}>
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
			    <p className='larger' style={{'marginBottom': '0px'}}>Hotel Sea Princess</p>
			    <p className='larger'style={{'marginTop': '0px'}}>Mumbai</p>
			    <button 
		            className='mapsButton grow dib black bg-493c06'  
		            type="button"
		            onClick= {() => window.open('https://www.google.co.in/maps/dir//Hotel+Sea+Princess,+Juhu+Tara+Road,+Beach,+near+Juhu,+Juhu,+Mumbai,+Maharashtra+400049,+India/@19.0939893,72.8282142,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b749b5d7d5d1:0x6cb9f769976f8426!2m2!1d72.8282142!2d19.0939893?hl=en',
		            											'_blank', 'noreferrer')}>
		            See on Maps
		      </button>
		    </div>
	    </div>
	    <div className='pane-row-rsvp'>
	    	<div className='rsvp'>
	    		<div className='title-section underline'>
			      <h2 className='rsvp-larger pointer'
			      onClick= {() => window.open('https://sanshine.rsvpify.com', '_blank', 'noreferrer')}>RSVP
			      </h2>
			    </div>
		    </div>
	    </div>
	</div>
    );
}




export default MumbaiInfo;

