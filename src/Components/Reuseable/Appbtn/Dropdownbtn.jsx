import React, { useContext } from 'react';
import { ContextApp } from '../../../ContextAPI';
import "./Dropdownbtn.css";
const Dropdownbtn = () => {

    const { cateogery, defaultCategory, setDefaultCategory } = useContext(ContextApp);
    return (
        <label class="dropdown">
            <div class="dd-button">
                {defaultCategory}
            </div>
            <input type="checkbox" class="dd-input" id="test" />
            <ul class="dd-menu">
                {
                    cateogery.map((item) => {
                        return (<li onClick={() => setDefaultCategory(item)}>{item}</li>)
                    })
                }
                <li class="divider"></li>
            </ul>

        </label>
    )
}

export default Dropdownbtn