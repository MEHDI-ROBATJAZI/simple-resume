import React , {Component} from "react";
import AboutMeComponent from "./footer/aboutme";
import Information from "./footer/information";
import AvatarSection from "./header/avatarSection";
import ShowFullName from "./header/introductionSection/fullName";
import SocialLinksComponent from "./header/introductionSection/socialLinks";
import Specialities from "./header/introductionSection/specialities";

import propTypes from 'prop-types'

class App extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <>
      <span style={{padding:"0 20px"}}>
        <label htmlFor="fake"  style={{padding:"0 8px"}}>fake</label>
        <input id="fake" type="radio" name="modeData" value="fakeInfo" onChange={(e)=>this.props.setDatamode(e.target.value)} />
      </span>
      <span>
        <label htmlFor="mahdi" style={{padding:"0 8px"}}>mahdi</label>
        <input id="mahdi" type="radio" name="modeData" value="mahdiInfo" onChange={(e)=>this.props.setDatamode(e.target.value)} />
      </span>

      <span>
        <input type="color" defaultValue="#ffc107" onChange={(e)=>this.props.setColor(e.target.value)} />
      </span>

      <div className="material-template">
         <main className="pt-page pt-page-current">
           <div className="section-inner start-page-content">
             <div className="page-header" style={{backgroundColor:this.props.color}}>
               <div className="row">
                 <div className="col-sm-4 col-md-4 col-lg-4">
                   <AvatarSection avatar={this.props.avatar} />
                 </div> 

               <div className="col-sm-8 col-md-8 col-lg-8">
                 <div className="title-block">
                   <ShowFullName fullName={this.props.fullName} />
                   <div className="owl-carousel text-rotation">
                     <Specialities specialities={this.props.specialities} />
                   </div>
                 </div>

                 <SocialLinksComponent socialLinks={this.props.socialLinks} />
               </div>
             </div>
           </div>

           <div className="page-content">
             <div className="row">
               <div className="col-sm-6 col-md-6 col-lg-6">
                 <AboutMeComponent aboutme = {this.props.aboutme} color={this.props.color} />
               </div>

               <div className="col-sm-6 col-md-6 col-lg-6">
                 <Information personinformation={this.props.personinformation} color={this.props.color}  />
               </div>
             </div>
           </div>
         </div>
       </main>
      </div>
     </>
    )
  }
}


export default App;



App.propTypes = {
  fullName : propTypes.string , 
  specialities : propTypes.arrayOf(propTypes.string),
  socialLinks : propTypes.shape({
    twitter:propTypes.string,
    youtube:propTypes.string,
    instagram:propTypes.string,
    facebook:propTypes.string
  }),
  aboutme:propTypes.string,
  personinformation:propTypes.shape({
    Age: propTypes.number,
    Residence: propTypes.string,
    Address: propTypes.string,
    "e-mail": propTypes.string,
    Phone: propTypes.string,
    Freelance: propTypes.string,
  })

}


App.defaultProps = {
  fullName: "Alex Smith",
  specialities: ["Web Designer", "Frontend-developer"],
  socialLinks: {
    twitter: "#",
    youtube: "#",
    instagram: "#",
    facebook: "#",
  },
  aboutme: ` Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor
  volutpat ac. Duis nulla enim, condimentum nec ultricies.`,
  personinformation: {
    Age: 29,
    Residence: "USA",
    Address: "Los Angles - USA",
    "e-mail": "email@example.com",
    Phone: "+0123 123 456 789",
    Freelance: "Available",
  },
}