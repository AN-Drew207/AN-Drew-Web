import React, {useState} from 'react' 
import Song from './Song'
import ytlogo from '../../img/YTpng.png'

const YtSongs=()=>{
 const [songs]=useState([
  {
   link:"https://www.youtube.com/watch?v=kowwCmdERm0",
   title:"Fake You | AN-Drew ft StoikoMC [Prod by Gextelo]"
  },
  {
   link:"https://www.youtube.com/watch?v=T22DUcluL_0",
   title:"Hipocresia de las Masas|AN-Drew [Prod by Gex]"   
  },
  {
   link:"https://www.youtube.com/watch?v=4Ficg57RjjE",
   title:"Muestra | AN-Drew [Prod. by Gex]"
  },
  {
   link:"https://www.youtube.com/watch?v=6C41M_NkqWE",
   title:"Tu eres|AN-Drew [Prod. by Gex & UntalMarioo]"
  },
  {
   link:"https://www.youtube.com/watch?v=zIcLGtkTFxk",
   title:"Presente (Freestyle)|AN-Drew x Gex"
  },
  {
   link:"https://youtu.be/yVzdRpSFqjw",
   title:"Real|AN-Drew [Prod. by Gextelo]"
  },
  {
   link:"https://youtu.be/UT-Xrs8Y-Qo",
   title:"Plata o Pluma|AN-Drew"
  },
  {
   link:"https://youtu.be/e7M6vfiQqLU",
   title:"Fondo|AN-Drew"
  },
  {
   link:"https://youtu.be/cy8bMXVbbSE",
   title:"ImproviSesion #2|AN-Drew"
  },
  {
   link:"https://youtu.be/IfDM5hZnjZs",
   title:"Freestyle #1 | AN-DREW"
  },
  {
   link:"https://youtu.be/MwFf8CRIztQ",
   title:"El Interés No Es Cortés | AN-Drew"
  },
  {
   link:"https://www.youtube.com/watch?v=Pe1Wzz-hrqU",
   title:"LA LIBERTAD DE UN PUEBLO | VENEZUELA RAP #VzlaLibre"
  },
 ])

 return(
  <div className="subcontainer-song d-flex flex-column justify-content-center align-items-center">
    <div className="songs-title">
     <h2>Play on</h2>
     <img className="logo-song" src={ytlogo} alt=""/>
    </div>
    <div className="list">
     <ul className="list-group yt-list">
      {songs.map((song)=>{
       return(
       <Song
        class="yt-text list-group-item"
        link={song.link}
        title={song.title}
       />
       )
     })}
     </ul>
    </div>
  </div>
 )
}

export default YtSongs;