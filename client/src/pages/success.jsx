import React from 'react'
import {useLocation} from "react-router";
const success = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div>successfull</div>
  )
}

export default success