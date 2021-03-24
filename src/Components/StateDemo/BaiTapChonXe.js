import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        url: './img/car/products/red-car.jpg'
    }
    changeImg = (vari) => {
        
            this.setState({
                url: `./img/car/products/${vari}-car.jpg`
            })
        
       
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.url} />
                    </div>
                    <div className="col-6">
                        <div className="btn btn-danger" onClick={() => {
                            this.changeImg('red');
                        }}>Red</div>
                        <div className="btn btn-danger" onClick={() => {
                            this.changeImg('black');
                        }}>Black</div>
                        <div className="btn btn-danger" onClick={() => {
                            this.changeImg('silver');
                        }}>Silver</div>
                    </div>
                </div>
            </div>
        )
    }
}
