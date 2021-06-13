import React , {Component} from "react";

class Specialities extends Component{

  constructor(props){
    super(props)
    this.state = {
      specialities : props.specialities
    }
  } 

  render(){
    const {specialities} = this.props
    return(
      <>
      {
        specialities.map(item=>(
        <div key={Date.now() + item} className="item">
          <div className="sp-subtitle">{item}</div>
        </div>
        ))
      }

      </>
    )
  }
}

export default Specialities;
