import React,{useContext} from "react";
import { AvatarLink } from "../../../context";

const AvatarSection = () => {

  
  const Avatar = useContext(AvatarLink)


  return (
    <div className="photo">
      <img src={Avatar} alt="logo" />
    </div>
  );
};

export default AvatarSection;
