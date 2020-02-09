import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'


import { resumeData } from '../resources/data'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeWrap from '../components/resumeWrap'

const Resume = () => {

  const data = useStaticQuery(graphql`
    query {
      agangDichaba: file(relativePath: { eq: "agang-dichaba.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lepekeMedical: file(relativePath: { eq: "lepeke-medical.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mutigLowe: file(relativePath: { eq: "mutig-lowe.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const companyLogos = [
    data.agangDichaba.childImageSharp.fluid,
    data.lepekeMedical.childImageSharp.fluid,
    data.mutigLowe.childImageSharp.fluid

  ]

  return (
    <Layout>
      <SEO title="Resume" />
      <ResumeWrapper>
        <section className="resume">
          <h2>
            <span className='text'>{resumeData.resumeTitle}</span>
            <span className='underline'></span>
          </h2>
          <div className="resume-content">
            {resumeData.content.map(obj => <ResumeWrap
              title={obj.title}
              innerCont={obj.work}
              viewBox={obj.viewBox}
              path={obj.svgPath}
            />)}
          </div>
        </section>
        <section className="companies">
          <h2>
            <span className='text'>{resumeData.compTitle}</span>
            <span className='underline'></span>
          </h2>

          <div className="logos">
            {companyLogos.map(logo => <div className='logo'>
              <Img className='img' fluid={logo} />
            </div>)}
          </div>
        </section>
      </ResumeWrapper>
    </Layout>
  )
}

export default Resume

const ResumeWrapper = styled.div`
  border-radius: .5rem;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: var(--shadow);
  min-height: 40rem;
  width: 100%;

  .resume {
    padding: 3rem 2rem;
    padding-bottom: 4rem;

    h2 {
      margin-bottom: 3rem;
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
        width: 6rem;
        opacity: .5;
        background-color: var(--sec-color);
        transform: translate(-4px, -10px);
        z-index: 0;
      }
    }

    .resume-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 41.875em) {
        grid-template-columns: 1fr;
      }
      .resume-wrap {
        margin-left: 1rem;
        padding-left: 1rem;
        border-left: solid 2px rgba(95, 95, 95, .2);
        z-index: 0;
        .title {
          padding-left: 3.5rem;
          position: relative;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 3.75rem;
          span {
            position: absolute;
            left: -2.8rem;
            top: -1rem;
            padding: .5rem;
            border-radius: 50%;
            background-color: var(--pri-color);
            height: 3.5rem;
            width: 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
          }
          svg {
            height: 1.5rem;
            width: 1.5rem;
            margin: 0 auto;
            fill: var(--grey);
          }
        }

        .resumeInner {
          padding-left: 1.5rem;
          margin-bottom: 3rem;
          position: relative;

          &::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            left: -21px;
            top: 4px;
            border-radius: 50%;
            border: solid 2px  var(--pri-color);
            @media only screen and (max-width: 66.25em ) {
              left: -19px;
            }
          }

          h3 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0;
          }

          .period {
            font-size: .875rem;
            margin-bottom: .4rem;
          }
          .text { 
            line-height: 1.5; 
            opacity: .6;
            width: 80%;
          }
        }
      }
    }
  }

  .companies {
    padding: 3rem 2rem;
    padding-bottom: 4rem;
    background: var(--bg-color);
      h2 {
        margin-bottom: 3rem;
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
        width: 7.5rem;
        opacity: .5;
        background-color: var(--sec-color);
        transform: translate(-4px, -10px);
        z-index: 0;
      }
    }

    .logos {
      display: grid;
      grid-template-columns: repeat(3, minmax(14rem, 1fr));
      grid-gap: 1.5rem; 
      .logo {
        background-color: var(--white);
        box-shadow: var(--shadow);
        border-radius: .5rem;
        .img{
          transform: scale(.6);
        }
      }
      @media only screen and (max-width: 37.5em ) {
        grid-template-columns:  minmax(14rem, 1fr);
        max-width: 90%;
        margin: 0 auto;
      }
    }
  }
`
