import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { ContextApp } from '../../../../ContextAPI'
import Price from './Price'
import Skeleton from '../../../Reuseable/Skeleton/Skeleton'


const Product = (props) => {
  const { product } = props
  const [activeimg, setActiveimg] = useState(product?.img)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setActiveimg(product.image)
  }, [product])

  return (
    <>

      <div className="product" style={loaded ? {} : { display: 'none' }}>
        <img onLoad={() => setLoaded(true)} src={product.image} alt="" className={`flytocart`} />
        <div className="top">
          <img src={activeimg} alt="" />
          {product.sale &&
            <div className='ribbon'>
              <span>
                {product.percent + '% OFF'}
              </span>
            </div>
          }
        </div>
        <div>{product?.title}</div>
        <div className="bottom">
          {
            <Price sale={product.sale} product={product} className='price' />
          }
        </div>

      </div>

      <Skeleton style={loaded ? { display: 'none' } : {}} />

    </>
  )
}
export default Product