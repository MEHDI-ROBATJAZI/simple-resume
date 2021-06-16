import React from 'react'
import {useSelector} from 'react-redux'


const SocialLinksComponent = () => {

const {socialLinks} = useSelector(state=>state.data)

  return (
    <div className="social-links">
      <a href={socialLinks.twitter}><i className="fa fa-twitter"></i></a>
      <a href={socialLinks.facebook}><i className="fa fa-facebook"></i></a>
      <a href={socialLinks.instagram}><i className="fa fa-instagram"></i></a>
      <a href={socialLinks.youtube}><i className="fa fa-youtube"></i></a>
    </div>  
  )
}

export default SocialLinksComponent
