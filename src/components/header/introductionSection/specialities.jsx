import React from "react";
import {useSelector} from 'react-redux'

const Specialities = () => {

  const {specialities} = useSelector(state=>state.data)

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
