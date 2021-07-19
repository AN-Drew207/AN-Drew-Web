import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import SliderElement from './SliderElement';
import firstImage from '../../img/MIN_demasiado.jpg'
import secondImage from '../../img/fakeyoumin.jpg'
import thirdImage from '../../img/mini-muestra.jpg'


const SliderComponent= () =>{

 return(
  <div className="d-flex justify-content-center ">
    <div className="d-flex flex-column justify-content-center align-items-center h-75 container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button 
           type="button"
           data-bs-target="#carouselExampleCaptions"
           data-bs-slide-to="0"
           class="active" aria-current="true"
           aria-label="Slide 1"
          />
          <button 
           type="button" 
           data-bs-target="#carouselExampleCaptions" 
           data-bs-slide-to="1" 
           aria-label="Slide 2"
          />
          <button 
           type="button" 
           data-bs-target="#carouselExampleCaptions" 
           data-bs-slide-to="2" 
           aria-label="Slide 3"
          />
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <SliderElement
             img={firstImage}
             link="https://www.youtube.com/watch?v=4Ficg57RjjE"
             title="Demasiado (Freestyle) | AN-Drew [Edit by Gextelo]"
             class="text-decoration-none text-white"
            />
          </div>
          <div class="carousel-item">
            <SliderElement
             img={secondImage}
             link="https://www.youtube.com/watch?v=kowwCmdERm0"
             title="Fake You | AN-Drew ft StoikoMC [Prod by Gextelo]"
             class="text-decoration-none text-warning"
            />
          </div>
          <div class="carousel-item">
            <SliderElement
             img={thirdImage}
             link="https://www.youtube.com/watch?v=6C41M_NkqWE"
             title="Muestra | AN-Drew [Prod. by Gex]"
             class="text-decoration-none text-dark"
            />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   </div>
 )
}

export default SliderComponent;