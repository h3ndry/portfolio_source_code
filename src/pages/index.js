import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello I am home page</h1>
    <Link to="/resume">resume</Link> <br />
    <Link to="/portfolio">portfolio</Link> <br />
    <Link to="/contact">resume</Link> <br />

  </Layout>
)

export default IndexPage
