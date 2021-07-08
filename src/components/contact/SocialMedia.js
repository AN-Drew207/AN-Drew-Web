import React from 'react' 

const SocialMedia = ()=>{
 const social_medias = [
 {
  link:"https://www.youtube.com/channel/UCEjRhuzvGKgPnw1wLtHpHWg",
  class_item:"youtube",
  class:"bi bi-youtube",
  username:"AN-Drew"
 },
 {
  link:"https://twitter.com/Andres20072001",
  class_item:"twitter",
  class:"bi bi-twitter",
  username:"@Andres20072001"
 },
 {
  link:"https://soundcloud.com/an-drewrap/",
  class_item:"cloud",
  class:"bi bi-cloud",
  username:"AN-Drew Rap"
 },
 {
  link:"https://www.instagram.com/andcont207/",
  class_item:"instagram",
  class:"bi bi-instagram",
  username:"@andcont207"
 }
];
 return( 
  <>
  <ul className="social-medias">
   {
    social_medias.map((social_media)=>{
     return(
      <li>
          <h4><a className={social_media.class_item} href={social_media.link}><i className={social_media.class}></i> {social_media.username}</a></h4>
      </li>
     )
    })
   }
  </ul>
  </>
 )
}

export default SocialMedia;