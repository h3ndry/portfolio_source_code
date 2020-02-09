import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="contact" />
    <h1>This is the contact page</h1>
    <p>ya if you see this it worked</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage