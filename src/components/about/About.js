import React from 'react'
import logoimg from '../../img/logowhite.png';

const About = () =>{
 return( 
  <>
  <div className="container container-img-about">
   <img className="img-fluid logo-about" src={logoimg} alt="" />
  </div>
  <div className="container container-paragraph-about">
   <p>
      My alias is AN-Drew and my real name is Andrés Contreras,
      I like music since I was a kid, and I love rap since I was 11 years old,
      I have to admit that I started listening to rap because of rap-plays, 
      it was my main influence. In fact, my first raps were about videogames 
      (Not ideal, but it is what it is haha). And now I try to put my feelings 
      into lyrics and rap them on a base to show them to the world. Lately I don't 
      dedicate a lot of time to music because I have not been very inspired and 
      I have been dedicating myself to other aspects of my life, but I know that
      whatever happends my love for music and especially rap, will never change.
      So every time I want to express something, I'll do it with a song.    
   </p>
  </div>
  </>
 )
}

export default About;