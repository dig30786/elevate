import React, { useContext } from 'react'
import { ContextApp } from '../../../../ContextAPI'
import Logo from '../../../Reuseable/Logo/Logo'
import Search from './Search'

const Fixedmenu = () => {
  const {menu, setMenu} = useContext(ContextApp)
  return (
  <div className={`fixedmenu ${menu?'fixedmenuactive':''}`}>
    <Logo />
    <div className="fixedmenulinks">
      <Search className='fixedsearch' setMenu={setMenu}/>
    </div>
  </div>
  )
}
export default Fixedmenu