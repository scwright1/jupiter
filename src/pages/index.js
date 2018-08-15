import React from 'react'

import Layout from '../components/layouts/index-layout'

import '../components/fonts.css'
import '../components/colours.css'

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <p>I'm in a layout!</p>
            </Layout>
        )
    }
}

export default Index
