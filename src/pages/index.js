import React from 'react'

import Layout from '../components/layouts/index-layout'

import '../components/fonts.css'
import '../components/colours.css'

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <div className="vh-100 w-100 ma0 pa0 bg-silver">
                    <div className="mw9 center ph5">
                        <div className="pt6">
                            content
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Index
