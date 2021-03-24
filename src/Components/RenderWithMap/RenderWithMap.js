import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    dataProduct = [
        { id: 1, productName: 'Iphone', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, productName: 'Iphone X', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, productName: 'Iphone XS', price: 3000, img: 'https://picsum.photos/200/200' },
    ]

    renderProduct = () => {
      
        let jsxContent = this.dataProduct.map((item, index) => {
            return 
            <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.img} alt={item.productName} />
                    <div className="card-body">
                        <h4 className="card-title">{item.productName}</h4>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            </div>

        })

        return jsxContent;
    }


    renderTableProduct = () => {
        return this.dataProduct.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td><img src={item.img} alt={item.productName} width={50}></img></td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-danger">Delete</button></td>

            </tr>
        })
        return this.renderTableProduct;
    }


    render() {
        return (
            <div className="Container">
                <h3 className="text-center display-4"> Proudct List</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderTableProduct()}
                    </tbody>
                </table>
            </div>

        )
    }
}
