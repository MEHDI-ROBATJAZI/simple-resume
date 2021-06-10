import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./src/components/app";
import DefaultAvatar from "./images/photo.png";
import AvatarMahdi from "./images/mahdi.png";

import {
  AvatarLink,
  FullName,
  Abilities,
  SocialLinks,
  AboutMe,
  PersonInformation,
  DataMode,
  Theme,
} from "./context";

//////////////////////////////////////////////////////////////////////
const defaultData = {
  Avatar: DefaultAvatar,
  fullName: "Alex Smith",
  specilities: ["Web Designer", "Frontend-developer"],
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
};
//////////////////////////////////////////////////////////////////
const mahdiData = {
  Avatar: AvatarMahdi,
  fullName: "Mahdi Robatjazi",
  specilities: ["Web Designer", "Software-Enginner", "Frontend-developer"],
  socialLinks: {
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  aboutme: `سلام بچه هامن مهدی رباط جزی ام _ این متن تستی رو برای این تمرین درنظر گرفتم 
            امیدوارم از کارم خوشتون بیاد`,
  personinformation: {
    Age: 22,
    Residence: "IR",
    Address: "Tehran - IRAN",
    "e-mail": "realmehdi1999m@gmail.com",
    Phone: "09046464180",
    Freelance: "Available",
  },
};
/////////////////////////////////////////////////////////////////////
const Container = () => {
  const [datamode, setDatamode] = React.useState("defaultInfo");

  let data = {};

  if (datamode === "defaultInfo") {
    data = defaultData;
  } else {
    data = mahdiData;
  }

  const [color, setColor] = React.useState({ color: "#ffc107" });

  return (
    <DataMode.Provider value={setDatamode}>
      <Theme.Provider value={{ color, setColor }}>
        <AvatarLink.Provider value={data.Avatar}>
          <FullName.Provider value={data.fullName}>
            <Abilities.Provider value={data.specilities}>
              <SocialLinks.Provider value={data.socialLinks}>
                <AboutMe.Provider value={data.aboutme}>
                  <PersonInformation.Provider value={data.personinformation}>
                    <App />
                  </PersonInformation.Provider>
                </AboutMe.Provider>
              </SocialLinks.Provider>
            </Abilities.Provider>
          </FullName.Provider>
        </AvatarLink.Provider>
      </Theme.Provider>
    </DataMode.Provider>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
