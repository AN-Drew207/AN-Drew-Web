import React from 'react'
import ScSongs from './ScSongs'
import YtSongs from './YtSongs'

const AllSongs = () =>{
 return(
  <>
   <div className="songs-container p-5">
    <ScSongs/>
   </div>
   <div className="songs-container p-5">
    <YtSongs/>
   </div>
  </>
 )
}

export default AllSongs