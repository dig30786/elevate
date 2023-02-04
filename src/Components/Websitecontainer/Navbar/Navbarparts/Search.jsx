import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link';
import { ContextApp } from '../../../../ContextAPI';
import Appbtn from '../../../Reuseable/Appbtn/Appbtn';

const Search = (props) => {
  const { keyword, setKeyword, itemList, setItemList, data } = useContext(ContextApp);
  const { className } = props;

  function handleSearch(e) {
    const { value } = e.target;
    setKeyword(value);
    if (value) {
      const filter = data.filter((item) => item?.title?.includes(value));
      setItemList([...filter]);
    }
    else {
      setItemList([...data]);
    }
  }
  return (
    <div className={className}>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder='Search...'
      />
      <HashLink
        onClick={() => { }} >
        <Appbtn icon='fal fa-search' />
      </HashLink>
    </div>
  )
}
export default Search