import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const BlogSummaryBuilder = () => (

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
                            fields {
                                slug
                            }
                            excerpt
                        }
                    }
                }
            }
        `}
        render={data => (
            <section id="blog-summary" className="content-panel vh-100 w-100 ma0 relative dt" data-navbar-scheme="dark">
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}{" "}</h3>
              <h3>{node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
            </Link>
                    </div>
                ))}
            </section>
        )}
    />
)

class BlogSummaryComponent extends React.Component {
    render () {
        return (
            <BlogSummaryBuilder />
        )
    }
}

export default BlogSummaryComponent
