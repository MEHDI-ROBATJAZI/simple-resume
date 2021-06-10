import React from "react";
import {AboutMe,Theme} from '../../../context'


function AboutMeComponent () {

  const aboutme = React.useContext(AboutMe)
  const {color} = React.useContext(Theme)

  return (
    <div className="about-me">
      <div className="block-title">
        <h3>
          About <span style={{color}}>Me</span>
        </h3>
      </div>
      <p>
        {aboutme}
      </p>
    </div>
  )
}

export default AboutMeComponent;
