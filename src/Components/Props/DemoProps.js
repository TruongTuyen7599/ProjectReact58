import React, { Component } from 'react'
import Cardb4Demo from './Cardb4Demo'

export default class DemoProps extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Cardb4Demo productName="IphoneX" price="1000"></Cardb4Demo>
                    </div>
                    <div className="col-4">
                        <Cardb4Demo productName="IphoneXS" price="2000"></Cardb4Demo>
                    </div>
                </div>



            </div>
        )
    }
}
