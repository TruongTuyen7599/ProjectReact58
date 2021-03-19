import React, { Component } from 'react'
import CardCarousel from './CardCarousel'

export default class extends Component {
    render() {
        return (

            <div className="row py-0">
                <div className="col-3">
                    <CardCarousel />
                </div>
                <div className="col-3">
                    <CardCarousel />
                </div>
                <div className="col-3">
                    <CardCarousel />
                </div>
                <div className="col-3">
                    <CardCarousel />
                </div>
            </div>

        )
    }
}
