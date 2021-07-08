import React from 'react';
import EmailForm from './EmailForm';
import SocialMedia from './SocialMedia';

const Contact = () =>{
 return(
  <>
   <div id="social-media-container">
    <SocialMedia/>
   </div>
   <div id="email-form-container">
    <EmailForm/>
   </div>
  </>
 )
}

export default Contact;