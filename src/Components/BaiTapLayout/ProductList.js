import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="display-4 text-center">Best SmartPhone</div>
                <div className="row">
                    <div className="col-3">
                        <ProductItem />
                    </div>
                    <div className="col-3">
                        <ProductItem />
                    </div>
                    <div className="col-3">
                        <ProductItem />
                    </div>
                    <div className="col-3">
                        <ProductItem />
                    </div>
                </div>
            </div>

        )
    }
}
