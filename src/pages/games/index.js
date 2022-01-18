import * as React from 'react'
import Layout from '../../components/layout'
import GameRandom from '../../components/game-random'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import "../../styles/game.scss"

const Game = ({ data }) => {
    return (
      <Layout pageName = {data.mdx.frontmatter.title} >
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        <GameRandom>
        </GameRandom>
      </Layout>
    )
  }

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        gameData
        selectCount
        buttonLabel
      }
      body
    }
  }
`

export default Game