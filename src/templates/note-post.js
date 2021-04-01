import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Left from "../components/Left"
import Center from "../components/Center"
import Right from "../components/Right"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <main className="note-container">
        <Left></Left>
        <Center>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </Center>
        <Right></Right>
      </main>
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
