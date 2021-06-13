import React from 'react'

class ShowFullName extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>{ this.props.fullName }</h1>
      </div>

    )
  }

}
export default ShowFullName
