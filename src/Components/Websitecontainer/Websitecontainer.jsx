import React from 'react'
import Body from './Body/Body'
import Navbar from './Navbar/Navbar'

const Websitecontainer = (props) =>{
  return (
    <div className="website app">
      <Navbar />
      <Body />
    </div>
  )
}
export default Websitecontainer