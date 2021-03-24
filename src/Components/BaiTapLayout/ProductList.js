import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    arrProduct = [
        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 4, tenSP: 'Vivo 850', hinhAnh: './img/vivo850.png', gia: 3000 }
    ]
    renderProductItem = () => {
        return this.arrProduct.map((product, index) => {
            return <div className="col-3" key={index}><ProductItem product={product} /></div>
        })
    }
    render() {

        return (
            <div className="container-fluid">
                <div className="display-4 text-center">Best SmartPhone</div>
                <div className="row">
                    {this.renderProductItem()}
                    {/* <div className="col-3">
                        <ProductItem product={this.arrProduct[0]} />
                    </div>
                    <div className="col-3">
                        <ProductItem product={this.arrProduct[1]} />
                    </div>
                    <div className="col-3">
                        <ProductItem product={this.arrProduct[2]} />
                    </div>
                    <div className="col-3">
                        <ProductItem product={this.arrProduct[3]} />
                    </div> */}
                </div>
            </div>

        )
    }
}
