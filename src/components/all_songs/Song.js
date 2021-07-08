import React from 'react'

const Song = (props) =>{
 return( 
  <li>
   <a className={props.class} href={props.link}>
    <h4>{props.title}</h4>
   </a>
  </li>
 )
}

export default Song