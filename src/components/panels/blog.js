import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (

    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                    totalCount
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                date(formatString: "DD MMM YYYY")
                            }
                            excerpt
                        }
                    }
                }
            }
        `}
        render={data => (
            <section className="vh-100 w-100 ma0 relative dt">
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>{node.frontmatter.title}</h3>
                        <span>{node.frontmatter.date}</span>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </section>
        )}
    />
)
