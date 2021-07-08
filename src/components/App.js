import React from 'react' 
import NavbarComponent from './navbar/NavbarComponent';
import SliderComponent from './slider/SliderComponent';
import AllSongs from './all_songs/AllSongs';
import About from './about/About'
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const App = () =>{
 return(
  <>
   <NavbarComponent/>
   <main>
    <section>
     <SliderComponent/>
    </section>
    <section id="all-songs">
     <AllSongs/>
    </section>
    <section id="about">
     <About/>
    </section>
    <section id="contact">
     <Contact/>
    </section>
   </main>
   <Footer/>
  </>
 )
}

export default App;