import React from 'react'

const Price = (props) => {
  const { product } = props
  return (
    <>
      <div className="price nosaleprice">
        ${product?.price}
      </div>
      <div className="price nosaleprice">
        rating : {product?.rating?.rate + `(${product?.rating?.count})`}
      </div>
    </>
  )
}
export default Price