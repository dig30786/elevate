import React from 'react'

const Products = (props) => {
  const {productsrow, style} = props
  return (
      <div className={`products gridproducts`} style={style}>
        {productsrow}
      </div >
  )
}
export default Products