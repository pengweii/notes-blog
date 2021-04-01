import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Blogs</h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>阅读全文</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default blog
