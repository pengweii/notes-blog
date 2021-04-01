import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const myQuery = graphql`
  {
    allDirectory(filter: { relativeDirectory: { eq: "notes" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/notes/" } }) {
      edges {
        node {
          id
          slug
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const Left = () => {
  const {
    allDirectory: { edges: categories },
    allMdx: { edges: contents },
  } = useStaticQuery(myQuery)

  let tag
  return (
    <div className="column note-left">
      {categories.map(({ node }) => (
        <div key={node.id} className="sidebar-section">
          <div className="sidebar-category">{(tag = node.name)}</div>
          {contents.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id} className="sidebar-link">
              {node.slug.includes("/" + tag + "/")
                ? node.frontmatter.title
                : ""}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Left
