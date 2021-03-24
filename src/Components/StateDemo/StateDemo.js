import React, { Component } from 'react'

export default class StateDemo extends Component {


    userName = 'cybersoft';


    state = {
        isLogin: false
    }// state là thuộc tính có sẵn của react class component chứa các biến làm thay đổi giao diện khi người dùng thao tác

    renderLogin = () => {
        if (this.state.isLogin) {
            return <span className="nav-link"> hello {this.userName}</span>
        }
        return <button onClick={() => { this.dangNhap() }}> dang nhap </button>
    }

    dangNhap = () => {
        // this.setState(newState)
        // this.setState: là phương thức có sẵn của react class component dùng để gán lại giá trị cho thuộc tính this.state
        //Đồng  thời gọi lại hàm render giao diện

        // let newState = {
        //     isLogin: true
        // }
        this.setState({
            isLogin: true
        }, function () {
            console.log('state', this.state)
        });

    }


    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <div className="nav-item bg-dark text-light">
                                {this.renderLogin()}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
