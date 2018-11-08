import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'tachyons'

import Navbar from '../navbar'

import Footer from '../footer'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div className="index-layout-wrapper">
                <Helmet title={ data.site.siteMetadata.title } />
                <Navbar/>
                <main className="main-content vh-100 relative">
                    { children }
                </main>
            </div>
        )}
    />
)

class LayoutComponent extends React.Component {
    render() {
        return (
            <Layout children={this.props.children} />
        )
    }
}



export default LayoutComponent
