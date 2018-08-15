import React from 'react'

import 'tachyons'

import Navbar from '../navbar'

import Footer from '../footer'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return(
            <div className="index-layout-wrapper ma3">
                <Navbar/>
                <div className="pv3">
                    { children }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Template
