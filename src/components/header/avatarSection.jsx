import React , {Component} from "react";

class AvatarSection extends Component{

  constructor(props){
    super(props)
  }




  render(){
    return (
      <div className="photo">
        <img src={this.props.avatar} alt="logo" />
      </div>
    );
  }
};


export default AvatarSection;
