import React, { useContext} from 'react';
import { ContextApp } from '../../../../ContextAPI'

const Navright = (props) => {

  const { menu, setMenu} = useContext(ContextApp)
  return (
    <div className="right">
      <i className='fal fa-shopping-bag'></i>
      <i className={`fal fa-user`} ></i>
      <i onClick={() => setMenu(!menu)} className={`mobbtn fal fa-${menu ? "times" : 'bars'}`}></i>
    </div>

  )
}
export default Navright