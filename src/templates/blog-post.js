import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
