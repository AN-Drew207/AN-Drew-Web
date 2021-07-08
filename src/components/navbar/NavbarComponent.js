import React from 'react' 
import LinkNavbar from './LinkNavbar';
import logonav from '../../img/logonav.png'
const NavbarComponent = () =>{
 
 return(
  <nav className="navbar navbar-expand navbar-light bg-white">
   <div className="container-fluid">
    <div className="img-container">
      <img className="navbar-brand img-fluid img-logo" src={logonav} alt="logo" />
     </div>
     <div>
      <ul className="navbar-nav">
       <LinkNavbar
        link="#body"
        name="Home"
       />
       <LinkNavbar
        link="#all-songs"
        name="Songs"
       />    
       <LinkNavbar
        link="#about"
        name="About"
       />     
       <LinkNavbar
        link="#contact"
        name="Contact"
       />
      </ul>
     </div>
   </div>
  </nav>
 );
}

export default NavbarComponent;