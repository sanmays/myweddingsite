import React, { Component } from 'react';
// import Button from './Button';
import './Button.css'
import 'tachyons';
import './App.css'
import Navigation from './Navigation.js';
import Rsvp from './Rsvp.js'
import Landing from './Landing.js'
import MumbaiInfo from './MumbaiInfo.js';
// import { guestsSG } from './guestsSG.js';
import PuneInfo from './PuneInfo.js';
// import { guestsSS } from './guestsSS.js';



class App extends Component {
  constructor(){
    super()
    this.state = {

      route: 'App',
      // guestsSG: guestsSG
      }
    }
  

  onRsvpButtonSubmit = () => {
    this.setState({route: 'rsvp'});
  }

  onRouteChange = (route) => {
    // console.log('home');
    this.setState({route: route});
  }


  render (){

    return (
      <div className='App tc'>
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'App'
        ? <Landing 
            className='home pa3'
            onRsvpButtonSubmit={this.onRsvpButtonSubmit}/>
        : <>{ this.state.route === 'MumbaiInfo'
        ? <MumbaiInfo onRouteChange={this.onRouteChange}/>
        : <>{this.state.route === 'PuneInfo'
        ? <PuneInfo onRouteChange={this.onRouteChange}/>
        : <Rsvp onRouteChange={this.onRouteChange}/>
        }
        </> 
        }
        </>
        }
      </div>
      )
  }

   

}

export default App;