import React from "react";


class Information extends React.Component{

  constructor(props){
    super(props)
  }
  

  render(){
    let arrPersonInformation  =  Object.entries(this.props.personinformation)
    
    return(
      <ul className="info-list">
        {arrPersonInformation.map(([key,value]) => (
          <li key={Date.now() + value}>
            {key === "e-mail" ? (
              <>
                <span className="title">{key}</span>
                <span className="value" style={{ color:this.props.color }}>
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
    )
  }

}


// const Information = ({personinformation , color}) => {

//   let arrPersonInformation = Object.entries(personinformation);

//   return (
//     <ul className="info-list">
//       {arrPersonInformation.map((item) => (
//         <li key={Date.now() + item[1]}>
//           {item[0] === "e-mail" ? (
//             <>
//               <span className="title">{item[0]}</span>
//               <span className="value" style={{ color }}>
//                 {item[1]}
//               </span>
//             </>
//           ) : (
//             <>
//               <span className="title">{item[0]}</span>
//               <span className="value">{item[1]}</span>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Information;
