import React from 'react'
import {useSelector} from 'react-redux'

const ShowFullName = () => {

  const {fullName} = useSelector(state=>state.data)

  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  )
}

export default ShowFullName
