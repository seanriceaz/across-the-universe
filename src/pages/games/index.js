import * as React from 'react'
import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Game = ({ data }) => {
    return (
      <Layout pageName = {data.mdx.frontmatter.title} >
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Layout>
    )
  }

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Game