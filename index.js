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
  return (
    <Fragment>
      <App />
    </Fragment>
  );
}


const logger = createLogger({
  duration : true , 
})
const store = createStore(rootReducer , applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById("root"));
