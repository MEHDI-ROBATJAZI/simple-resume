import React from "react";
import {Abilities} from '../../../../context'

const Specialities = () => {

  const specialities = React.useContext(Abilities)

  return (
    <>
    {
      specialities.map(item=>(
      <div key={Date.now() + item} className="item">
        <div className="sp-subtitle">{item}</div>
      </div>
      ))
    }

    </>
  );
};

export default Specialities;
