import React, { Component } from 'react'

import CarouselComponent from './CarouselComponent'
import CartListComponent from './CartListComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

export default class BaiTapThucHanhLayout extends Component {

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container py-5">
                    <CarouselComponent />
                    <CartListComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}
