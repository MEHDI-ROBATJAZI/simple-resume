import React from "react";

const Specialities = ({specialities}) => {


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
