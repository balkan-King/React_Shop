import React from 'react'
import withNavbar from './components/hoc/withNavbar/withNavbar';
import Cardlist from './components/cardlist/Cardlist';
import Header from './components/shopHeader/Header';

const WebShop = () => {
    return (
        <div>
            <Header />
            <Cardlist />
        </div>
    )
}

export default withNavbar(WebShop)
