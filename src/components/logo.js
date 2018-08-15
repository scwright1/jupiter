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
            <div className="pv1 ph2 bg-col-dark dib">
                <Link
                    to="/"
                    className="f5 white no-underline gilroy-medium tracked"
                    >
                    { data.site.siteMetadata.shortTitle }
                </Link>
            </div>
        )}
    />
)
