import React from 'react'
import Cart from './Cart'
import Back from './Back'
import Search from './Search'
import Location from './Location'
import Delivery from './Delivery'
import { Container } from './style'
const Header = () => {
    return (
        <Container>
            <Back />
            <Location />
            <Search placeholder="Search products in Wallmart" />
            <Delivery />
            <Cart />
        </Container>
    )
}

export default Header