import React from "react";

function AboutMeComponent ({aboutme,color}) {

 
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
