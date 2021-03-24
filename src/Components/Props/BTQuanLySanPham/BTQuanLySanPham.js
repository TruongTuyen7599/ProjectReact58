import React, { Component } from 'react'
import SP from './SP'

export default class BTQuanLySanPham extends Component {
    dataProduct =
        [
            {
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "manHinh": "AMOLED, 6.2\", Full HD+",
                "heDieuHanh": "Android 9.0 (Pie)",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 5700000,
                "hinhAnh": "./img/vsphone.jpg"
            },

            {
                "maSP": 2,
                "tenSP": "Meizu 16Xs",
                "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
                "heDieuHanh": "Android 9.0 (Pie); Flyme",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 7600000,
                "hinhAnh": "./img/meizuphone.jpg"
            },

            {
                "maSP": 3,
                "tenSP": "Iphone XS Max",
                "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
                "heDieuHanh": "iOS 12",
                "cameraSau": "Chính 12 MP & Phụ 12 MP",
                "cameraTruoc": "7 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 27000000,
                "hinhAnh": "./img/applephone.jpg"
            }
        ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"

        }
    }
    renderProduct = () => {

        return this.dataProduct.map((product, index) => {
            return <div className="col-4" key={index}> <SP product={product} viewProductDetail={this.viewProductDetail} /></div>
        })
    }
    viewProductDetail = (productClick) => {

        this.setState({
            productDetail: productClick
        });
    }
    render() {
        let { productDetail } = this.state;
        return (
            <div className="container">
                <h3 className="text-center display-4"> Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="m-5">
                    <div className="row">
                        <div className="col-4">
                            <h3>{productDetail.tenSP}</h3>
                            <img className="w-100" src={productDetail.hinhAnh}></img>
                        </div>
                        <div className="col-6">
                            <h3 className="text-center"> Thông tin sản phẩm</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>{productDetail.tenSP}</th>
                                    </tr>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{productDetail.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>hệ điều hành</th>
                                        <th>{productDetail.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{productDetail.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{productDetail.cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>Ram</th>
                                        <th>{productDetail.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>Rom</th>
                                        <th>{productDetail.rom}</th>
                                    </tr>

                                </thead>
                                {/* <tbody>
                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody> */}
                            </table>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>

        )
    }
}
