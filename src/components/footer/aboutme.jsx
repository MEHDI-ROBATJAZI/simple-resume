import React from "react";



class AboutMeComponent extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="about-me">
        <div className="block-title">
          <h3>
            About <span style={{color:this.props.color}}>Me</span>
          </h3>
        </div>
         <p>
          {this.props.aboutme}
         </p> 
     </div>
    )
  }
}


// function AboutMeComponent ({aboutme,color}) {

 
//   return (
//     <div className="about-me">
//       <div className="block-title">
//         <h3>
//           About <span style={{color}}>Me</span>
//         </h3>
//       </div>
//       <p>
//         {aboutme}
//       </p>
//     </div>
//   )
// }

export default AboutMeComponent;
