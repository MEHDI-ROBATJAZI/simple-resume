import React, { Fragment ,  useState } from "react";
import ReactDOM from "react-dom";
import App from "./src/components/app";

import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import rootReducer from './src/reducers/index.reducers.js'
import {createLogger} from 'redux-logger'

//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
const Container = () => {
  /*const [datamode, setDatamode] = React.useState("");

  let data = {};

  datamode === "fakeInfo" ?  data = fakeData : data = mahdiData;

  const [color, setColor] = React.useState({ color: "#ffc107" });

  console.log(data)
*/
  return (
    <Fragment>
      <App 
        // fullName = {data.fullName}
        // avatar = {data.Avatar}
        // specialities = {data.specialities}
        // socialLinks = {data.socialLinks}
        // aboutme = {data.aboutme}
        // personinformation = {data.personinformation}
        // setDatamode={setDatamode}
        // setColor={setColor}
        // color={color}
      />
    </Fragment>
  );
}


const logger = createLogger({
  duration : true , 
})
const store = createStore(rootReducer , applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById("root"));
