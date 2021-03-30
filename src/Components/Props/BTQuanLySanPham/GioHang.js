import React, { Component } from 'react'

import _ from 'lodash'; // import thư viện lodash

export default class GioHang extends Component {
    renderGioHang = () => {

        let gioHang = _.sortBy(this.props.gioHang, ['maSP']);
        //_sortBy(arr,[key])
        return gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>
                        <img src={spGH.hinhAnh} height={50} />
                    </td>
                    <td>{spGH.tenSP}</td>
                    <td>
                        <button
                            className="mr-2 btn btn-primary"
                            onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, 1);
                            }}
                        >
                            +
                </button>
                        {spGH.soLuong}
                        <button
                            className="ml-2 btn btn-primary"
                            onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, -1);
                            }}
                        >
                            -
                </button>
                    </td>
                    <td>{spGH.giaBan}</td>
                    <td>{spGH.giaBan * spGH.soLuong}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                this.props.xoaGioHang(spGH.maSP);
                            }}
                        >
                            Xóa
                </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div className="mt-5">
                <div>
                    <h3>Giỏ hàng</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá bán</th>
                                <th>Thành tiền</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>{this.renderGioHang()}</tbody>
                    </table>
                </div>

            </div>
        )
    }
}
