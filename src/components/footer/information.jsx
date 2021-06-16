import React from "react";
import {useSelector} from 'react-redux'
const Information = () => {

  const {colorCode} = useSelector(state=>state.color)
  const {personinformation} = useSelector(state=>state.data)

  let arrPersonInformation = Object.entries(personinformation);

  return (
    <ul className="info-list">
      {arrPersonInformation.map(([key,value]) => (
        <li key={Date.now() + value}>
          {key === "e-mail" ? (
            <>
              <span className="title">{key}</span>
              <span className="value" style={{ color:colorCode }}>
                {value}
              </span>
            </>
          ) : (
            <>
              <span className="title">{key}</span>
              <span className="value">{value}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Information;
