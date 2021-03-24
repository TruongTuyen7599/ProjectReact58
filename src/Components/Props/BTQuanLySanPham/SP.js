import React, { Component } from 'react'

export default class SP extends Component {
    render() {
        let { product } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" height={300} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan}</p>
                        <button type="button" name="" id="" class="btn btn-primary" onClick={() => {
                            this.props.viewProductDetail(product);
                        }}>Xem Chi tiet</button>
                    </div>
                </div>
            </div>
        )
    }
}
