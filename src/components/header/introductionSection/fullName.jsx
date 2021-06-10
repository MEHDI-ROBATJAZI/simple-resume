import React,{useContext} from 'react'
import {FullName} from '../../../../context'
const ShowFullName = () => {

  const fullName = useContext(FullName)

  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  )
}

export default ShowFullName
