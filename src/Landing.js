import React from 'react';
import './Button.css'
import 'tachyons';
import './App.css';
import './Landing.css';



const Landing = ({ onRsvpButtonSubmit }) => {
  
    return (
      <div className='centerText'>
        <div>
          <h1 className='pa6'>Sakshi weds Sanmay</h1>
          <div className='centerText' style={{'paddingBottom':'0px', 'marginBottom':'30px', 'paddingTop':'0px'}}>
            <p className='wecomeMessage' style={{'marginBottom' : '0px', 'paddingTop' : '0px', 'marginTop' : '0px'}}>We're thrilled to</p>
            <p className='wecomeMessage' style={{'marginTop' : '0px'}}>celebrate with you!</p>
            {/*<p style={{'marginTop' : '0px'}}>have your presence!</p>*/}
          </div>
        </div>
        <div /*className='center' style={{'paddingBottom': '80px', 'width':'120px'}}*/>
{/*          <button 
            className='rsvpButton grow dib black bg-transparent'  
            type="button"
            onClick={onRsvpButtonSubmit}>
            To RSVP and more...
          </button>*/}
          <p 
            className='rsvpLink f3 mh3 link dim pointer' style={{'paddingBottom': '80px'}}  
            onClick={onRsvpButtonSubmit}>
            RSVP & more
          </p>
        </div>
      </div>
      )
  }

   



export default Landing;