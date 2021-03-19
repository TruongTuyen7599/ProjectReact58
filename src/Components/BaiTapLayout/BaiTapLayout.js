import React, { Component } from 'react'
import CarouselComponent from './CarouselComponent'
import HeaderComponent from './HeaderComponent'
import ProductList from './ProductList'
import PromotionComponent from './PromotionComponent'


export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <CarouselComponent />
                <ProductList />
                <PromotionComponent />
            </div>
        )
    }
}
