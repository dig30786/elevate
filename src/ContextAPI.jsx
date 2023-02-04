import React, { createContext, useEffect, useState } from 'react'
export const ContextApp = createContext()

const ContextAppProvider = props => {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cateogery, setCateogery] = useState([]);
  const [defaultCategory, setDefaultCategory] = useState("jewelery");
  const [itemList, setItemList] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [data,setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCateogery([...data])
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${defaultCategory}`)
      .then(res => res.json())
      .then(data => {
        setKeyword("")
        setItemList([...data]);
        setData([...data])
        setLoading(false);
      });
  }, [defaultCategory]);

  return <ContextApp.Provider
    value={{
      menu, setMenu,
      cateogery, setCateogery,
      loading, setLoading,
      defaultCategory, setDefaultCategory,
      itemList, setItemList,
      scrolled, setScrolled,
      keyword, setKeyword,
      data
    }}>
    {props.children}
  </ContextApp.Provider>
}
export default ContextAppProvider