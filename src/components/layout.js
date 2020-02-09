/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import GlobalStyles from '../layout/globalStyles'
import Profile from './profile'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteWrapper >
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Profile name={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>

    </SiteWrapper >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const SiteWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr minmax(5rem, 17rem) minmax(13rem, 58rem) 1fr;
  grid-template-areas: "..... profile header ...."
                        ".... profile pages ...."
                        "..... ...... footer ....";
  grid-gap: 1.5rem;
  @media only screen and (max-width: 56.875em ) {
    padding-top: 2rem;
    grid-template-columns: 1fr 90% 1fr;
    grid-template-areas: "..... profile ...."
                        ".... header ...."
                        ".... pages ...."
                        ".... footer ....";
    grid-gap: 0;
    grid-row-gap: 1.5rem;
    justify-items: center;
  }
  @media screen and (max-width: 31.25em) {
    padding-top: 1rem;
    grid-template-columns: 1fr 95vw 1fr;
    grid-template-areas: "..... profile ...."
                        ".... header ...."
                        ".... pages ...."
                        ".... footer ....";
    grid-gap: 0;
    grid-row-gap: 1.5rem;
    justify-items: center;
  }


  main {
    grid-area: pages;
    width: 100%;
    padding: 0;
  }

  footer {
    grid-area: footer;
  }

`