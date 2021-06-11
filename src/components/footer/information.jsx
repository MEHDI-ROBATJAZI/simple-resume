import React from "react";

const Information = ({personinformation , color}) => {

  let arrPersonInformation = Object.entries(personinformation);

  return (
    <ul className="info-list">
      {arrPersonInformation.map((item) => (
        <li key={Date.now() + item[1]}>
          {item[0] === "e-mail" ? (
            <>
              <span className="title">{item[0]}</span>
              <span className="value" style={{ color }}>
                {item[1]}
              </span>
            </>
          ) : (
            <>
              <span className="title">{item[0]}</span>
              <span className="value">{item[1]}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Information;
