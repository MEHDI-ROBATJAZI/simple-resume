import React from "react";
import {useSelector} from 'react-redux'

function AboutMeComponent () {

  const {aboutme}  = useSelector(state => state.data)
  const {colorCode}  = useSelector(state => state.color)
  
  return (
    <div className="about-me">
      <div className="block-title">
        <h3>
          About <span style={{color:colorCode}}>Me</span>
        </h3>
      </div>
      <p>
        {aboutme}
      </p>
    </div>
  )
}

export default AboutMeComponent;
