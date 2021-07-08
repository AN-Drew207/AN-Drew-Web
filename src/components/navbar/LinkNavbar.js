import React from 'react'

const LinkNavbar=(props)=>{
 return <li className="nav-item"><a className="nav-link" href={props.link}>{props.name}</a></li>
}
export default LinkNavbar;