import React, { useContext, useState } from 'react'
import { ContextApp } from '../../../../ContextAPI'
import Skeleton from '../../../Reuseable/Skeleton/Skeleton'
import Product from '../Product/Product'
import './Productcontainer.css'
import Products from './Products'
const Productcontainer = (props) => {
    const { loading,keyword } = useContext(ContextApp)
    const { title, array, subtitle } = props;


    const productsrow = array?.map(product => {
        return <Product product={product} products={array} />
    })
    return (
        <div className="projectcontainer">
            {
                <div className="containertitle">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                </div>
            }
            {
                (loading || array.length === 0 && !keyword) ?
                    <div className="skeletons">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                    :
                    <Products productsrow={productsrow} />
            }
        </div>
    )
}
export default Productcontainer