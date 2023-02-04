import React, { useContext, useEffect } from 'react'
import { ContextApp } from '../../../../ContextAPI'
import Carousel from '../../Carousel/Carousel'
import Productcontainer from '../Productscontainer/Productcontainer'

const Home = () => {
    const { itemList } = useContext(ContextApp);
    return (
        <div className='home'>
            <Carousel />
            <Productcontainer
                array={itemList}
                title='New Arrivals'
                subtitle='Shop popular and new arrivals from ShopiumX'
            />

        </div>
    )
}
export default Home