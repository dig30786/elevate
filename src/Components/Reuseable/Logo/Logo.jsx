import React from 'react'
import './Logo.css'
const Logo = (props) => {
  const Tag = 'span';
  return (
  <Tag smooth className="logo">
    <img src="https://i.imgur.com/dkq33Q6.png" alt=""/>
    <span>
      <strong>{"elevate"}</strong>
    </span>
  </Tag>
  )
} 
export default Logo