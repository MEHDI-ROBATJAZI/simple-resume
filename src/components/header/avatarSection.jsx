import React from "react";
import {useSelector} from 'react-redux'

const AvatarSection = () => {

  const {Avatar}  = useSelector(state =>state.data)

  return (
    <div className="photo">
      <img src={Avatar} alt="logo" />
    </div>
  );
};


export default AvatarSection;
