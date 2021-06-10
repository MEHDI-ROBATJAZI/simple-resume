import React from "react";
import AboutMeComponent from "./footer/aboutme";
import Information from "./footer/information";
import AvatarSection from "./header/avatarSection";
import ShowFullName from "./header/introductionSection/fullName";
import SocialLinksComponent from "./header/introductionSection/socialLinks";
import Specialities from "./header/introductionSection/specialities";

import { DataMode , Theme } from "../../context";

const App = () => {

  const setDataMode = React.useContext(DataMode)
  const {color,setColor} = React.useContext(Theme)



  return (
    <>
      <span style={{padding:"0 20px"}}>
        <label style={{padding:"0 8px"}}>default</label>
        <input type="radio" name="modeData" value="defaultInfo" onChange={(e)=>setDataMode(e.target.value)} />
      </span>
      <span>
        <label style={{padding:"0 8px"}}>mahdi</label>
        <input type="radio" name="modeData" value="mahdiInfo" onChange={(e)=>setDataMode(e.target.value)} />
      </span>

      <span>
        <input type="color" defaultValue="#ffc107" onChange={(e)=>setColor(e.target.value)} />
      </span>

      <div className="material-template">
        <main className="pt-page pt-page-current">
          <div className="section-inner start-page-content">
            <div className="page-header" style={{backgroundColor:color}}>
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <AvatarSection />
                </div>

                <div className="col-sm-8 col-md-8 col-lg-8">
                  <div className="title-block">
                    <ShowFullName />
                    <div className="owl-carousel text-rotation">
                      <Specialities />
                    </div>
                  </div>

                  <SocialLinksComponent />
                </div>
              </div>
            </div>

            <div className="page-content">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <AboutMeComponent />
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6">
                  <Information />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
