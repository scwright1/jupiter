import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        shortTitle
                    }
                }
            }
        `}
        render={data => (
            <div className="pt2 pb2 ph3 bg-col-dark dib lh-solid">
                <Link
                    to="/"
                    className="f5 white no-underline gilroy-medium tracked lh-solid"
                    >
                    { data.site.siteMetadata.shortTitle }
                </Link>
            </div>
        )}
    />
)
