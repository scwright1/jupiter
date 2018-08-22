import React from 'react'

import 'tachyons'

import Navbar from '../navbar'

import Footer from '../footer'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return(
            <div className="index-layout-wrapper">
                <Navbar/>
                <main className="main-content">
                    { children }
                </main>
            </div>
        )
    }
}

export default Template
