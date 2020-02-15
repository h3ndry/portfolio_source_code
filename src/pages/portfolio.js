import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'



import Image from '../images/react-store.gif'
import { CardThree } from '../components/cards'
import Layout from "../components/layout"
import SEO from "../components/seo"




const Portfolio = () => {


  const portfolioList = [
    {
      id: `prject-1`,
      title: 'Cell Phone Store',
      img: require('../images/react-store.gif'),
      text: `A cell phone store web applicatin built with React JS using context API`,
      demoURL: `https://cell-phone-store.netlify.com/`,
      gitURL: `https://github.com/henkhodryza/cell-phone-store`
    },
    {
      id: `prject-2`,
      title: 'Travel Blog Website',
      img: require('../images/natour-r.gif'),
      text: `A travel agents website built on React using gatsby static side generatore `,
      demoURL: `http:www.whater.com`,
      gitURL: `https://github.com/henkhodryza/Natour-React-Gatsby`
    }
  ]


  return (
    <Layout>
      <SEO title="Portfolio" />
      <PortWrapper >
        <section className="portfolio-section">
          <div className="portfolio-list">
            {portfolioList.map(project => <CardThree
              key={project.id}
              project={project}
            />)}

          </div>
        </section>
      </PortWrapper >
    </Layout>
  )
}

export default Portfolio


const PortWrapper = styled.div`
  border-radius: .5rem;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: var(--shadow);
  min-height: 40rem;
  width: 100%;

  section {
    padding: 3rem 2rem;
    padding-bottom: 4rem;

    .card {
      padding-bottom: 2rem;
      border-bottom: 2px solid rgba(203,48,102, .2);

      &:not(:last-child) { margin-bottom: 6rem; }

      h2 {
        margin-bottom: 2rem;
        .text {
          position: relative;
          color: var(--black);
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          z-index: 1;
        }

        .underline {
          position: absolute;
          height: 8px;
          opacity: .5;
          background-color: var(--sec-color);
          transform: translate(-4px, -10px);
          z-index: 0;
        }
      }

      &:nth-child(1) h2 .underline { width: 11rem }
      &:nth-child(2) h2 .underline { width: 13rem }

      .project-photo {
        margin-bottom: 2rem;
        img { width: 100% }
      }

      .text p { margin-bottom: 2rem }

      .btn-container {
        a:link,
        a:visited,
        a:active {
          display: inline-block;
          text-decoration: none;
          background-color: var(--pri-color);
          padding: .5em 1em;
          border-radius: 30rem;
          color: var(--grey);
          &:not(:last-child) {margin-right: 2rem;}
          transition: all .35s cubic-bezier(0.39, 0.575, 0.565, 1);
        
        }

        a:hover {
          box-shadow: -2px 2px 10px rgba(0,0,0, .17);
          transform: translateY(-2px);
        }
        
      }
    }
  }

`