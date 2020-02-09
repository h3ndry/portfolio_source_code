import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="portfolio" />
    <h1>Hey This is it, you ar at resume page</h1>
    <p>If you see this is worked</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage