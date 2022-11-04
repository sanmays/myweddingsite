import React, { Component } from 'react';
import './Button.css'
import 'tachyons';
import './App.css'
import Navigation from './Navigation.js';
import Rsvp from './Rsvp.js'
import Landing from './Landing.js'
import MumbaiInfo from './MumbaiInfo.js';
import PuneInfo from './PuneInfo.js';
import MumbaiPuneInfo from './MumbaiPuneInfo.js';



class App extends Component {
  constructor(){
    super()
    this.state = {

      route: 'App',
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
        : <>{ this.state.route === 'PuneInfo'
        ? <PuneInfo onRouteChange={this.onRouteChange}/>
        : <>{ this.state.route === 'MumbaiPuneInfo'
        ? <MumbaiPuneInfo onRouteChange={this.onRouteChange}/>
        : <Rsvp onRouteChange={this.onRouteChange}/>
        }
        </>
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




    // return (
    //   <div className='App tc'>
    //     <Navigation onRouteChange={this.onRouteChange}/>
    //     { this.state.route === 'App'
    //     ? <Landing 
    //         className='home pa3'
    //         onRsvpButtonSubmit={this.onRsvpButtonSubmit}/>
    //     : <>{ this.state.route === 'MumbaiInfo'
    //     ? <MumbaiInfo onRouteChange={this.onRouteChange}/>
    //     : <>{this.state.route === 'PuneInfo'
    //     ? <PuneInfo onRouteChange={this.onRouteChange}/>
    //     : <Rsvp onRouteChange={this.onRouteChange}/>
    //     }
    //     </> 
    //     }
    //     </>
    //     }
    //   </div>
    //   )