import React from 'react' 

const SliderElement = (props) =>{
 return(
  <>
  <a href={props.link} rel="noreferrer" target="_blank"><img src={props.img} class="d-block w-100" alt="..."/></a>
   <div class="carousel-caption d-none d-md-block">
     <a className={props.class} href={props.link} rel="noreferrer" target="_blank"><h5 className="slider-title">{props.title}</h5></a>
   </div>
  </>
 )

}

export default SliderElement;