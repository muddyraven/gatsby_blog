import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>This is a sample site for the Gatsby crash course by Brad Traversy (@traversymedia). This is my very first time using Gatsby, GraphQL and ReactJS.</p>
  </Layout>
)

export default IndexPage
