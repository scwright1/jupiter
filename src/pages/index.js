import React from 'react'

import Layout from '../components/layouts/index-layout'

import HeadlinePanel from '../components/panels/headline'
import BlogPanel from '../components/panels/blog'

import '../components/fonts.css'
import '../components/colours.css'
import '../components/base.css'

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <HeadlinePanel/>
            </Layout>
        )
    }
}

export default Index
