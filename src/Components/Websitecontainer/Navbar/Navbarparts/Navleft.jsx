import React from 'react'
import Dropdownbtn from '../../../Reuseable/Appbtn/Dropdownbtn'
import Navright from './Navright'
import Search from './Search'

const Navleft = (props) => {
  return (
    <div className={`left`}>
      <div className='leftcont'>
        <div className="searchCont">
          <Dropdownbtn />
        </div>
        <div className="navlinks">
          <Search className="fixedsearch" />
        </div>
        <Navright />
      </div>
    </div>

  )
}
export default Navleft