import React , {Component} from 'react'


class SocialLinksComponent extends Component{

  constructor(props){
    super(props)
  }

  render(){
    let socialLinks = Object.entries(this.props.socialLinks)
    return(
      <div className="social-links">
        {
          socialLinks.map(([name,source])=>(
            
            <a key={name} target="_blank" href={source}><i className={`fa fa-${name}`}></i></a>

          ))
        }

      </div>    
    )
  }
}
export default SocialLinksComponent
