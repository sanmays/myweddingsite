import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
  return (
    <nav className='pa5' style={{display: 'flex', justifyContent: 'center', 'paddingBottom': '10px'}} >
      <p onClick={() => onRouteChange('App')} className='f3 mh2 link dim underline pointer'>Home</p>
      {/*<p className='f3 mh2 link dim underline pointer'>Contact</p>*/}
     {/* <p className='f3 mh2 link dim underline pointer'>Gallery</p>*/}
    </nav>
    );
}




export default Navigation;