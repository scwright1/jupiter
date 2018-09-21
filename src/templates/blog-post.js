import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"

import 'blog-post.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <section className="fl w-100 ma0 relative ph6-l ph5-m ph4-ns pt6">
            <div className="mw9 center ph4 gilroy-light lh-copy">
                <div className="f3">{post.frontmatter.title}</div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
