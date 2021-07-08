import React, {useState} from 'react' 
import Song from './Song'
import sclogo from '../../img/soundcloudpng.png'

const ScSongs=()=>{
 const [songs]=useState([
  {
   link:"https://soundcloud.com/an-drewrap/stoiko-fake-you-feat-an-drew",
   title:"Fake You| AN-Drew ft Stoiko [prod by Gextelo]"
  },
  {
   link:"https://soundcloud.com/an-drewrap/tu-eresan-drew",
   title:"Tu Eres|AN-Drew "   
  },
  {
   link:"https://soundcloud.com/an-drewrap/presente-freestylean-drew",
   title:"Presente (Freestyle)|AN-Drew "
  },
  {
   link:"https://soundcloud.com/an-drewrap/plata-o-plumaan-drew",
   title:"Plata O Pluma|AN-Drew "
  },
  {
   link:"https://soundcloud.com/an-drewrap/brawhalla-rap",
   title:"Brawhalla Rap|AN-Drew"
  },
  {
   link:"https://soundcloud.com/an-drewrap/fondo",
   title:"Fondo| AN-Drew [prod by Gextelo]"
  },
  {
   link:"https://soundcloud.com/an-drewrap/rap-venezuela-2",
   title:"Rap Venezuela Remix|AN-Drew"
  },
  {
   link:"https://soundcloud.com/an-drewrap/improvisesion-2",
   title:"ImproviSesion #2"
  },
  {
   link:"https://soundcloud.com/an-drewrap/resident-evil-rap",
   title:"Resident Evil Rap|AN-Drew[prod by Gextelo]"
  }
 ])

 return(
  <div className="subcontainer-song d-flex flex-column justify-content-center align-items-center">
   <div className="songs-title">
     <h2>Play on</h2>
     <img className="logo-song" src={sclogo} alt="" />
   </div>
   <div className="list">
    <ul className="list-group sc-list">
     {songs.map((song)=>{
      return(
      <Song
       class="sc-text list-group-item"
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

export default ScSongs;