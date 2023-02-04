import React, { useEffect ,useContext, useState } from 'react'
import './Navbar.css'
import { ContextApp } from '../../../ContextAPI';
import Navbarcontainer from './Navbarcontainer';
import Fixedmenu from './Navbarparts/Fixedmenu';

const Navbar = (props) => {
  const {setScrolled, scrolled} = useContext(ContextApp)
  function handleScroll() {
    if(window.scrollY > 49.2) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])
  
  return (
   <>
   <div id="top"></div>
   <i 
   onClick={()=> window.scrollTo(0, 0)}
   className={`fal fa-chevron-up scrollupicon ${scrolled?'activescrollupicon':''}`}></i>
    <Fixedmenu />
    <Navbarcontainer scrolled={scrolled}/>
   </>
  )
}
export default Navbar