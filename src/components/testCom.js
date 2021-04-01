import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allDirectory(filter: { relativeDirectory: { eq: "notes" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default ComponentName
