import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <div>
    <SEO title="Resources" />
      <h1>Resources</h1>
      <p>Here you will find links to resources that I have found indispensable whilst studying to code.</p>
      <ul>
        <li><a href="https://freecodecamp.org">freeCodeCamp</a></li>
        <li><a href="https://traversymedia.com/">Brad Traversy</a></li>
        <li><a href="https://wesbos.com">Wes Bos</a></li>
        <li><a href="https://twitter.com/js_tut">JavaScript Teacher</a></li>
      </ul>
      <p>Mondo thanks go to those above, and I apologise to anyone I have missed, I am sure there are many!</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ResourcesPage;