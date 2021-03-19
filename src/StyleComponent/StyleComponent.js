import React, { Component } from 'react'
import './Style1.css'

import style from './Style.module.css'

export default class StyleComponent extends Component {
    render() {
        return (
            <div className="container">
                {/* cách 1  */}
                <p className="text-red">Hello cybersoft</p>
                {/* cách 2  */}
                <div className={`p-5 ${style.textGreen} ${style['background-black']} display-4`}> ahihi</div>
                {/* cách 3  */}
                <p style={{ backgroundColor: 'red', padding: '15px', color: 'white', marginTop: '15px' }}>hello fe 58</p>
            </div>
        )
    }
}
