import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

import SEO from "../components/seo"
import { homeData } from '../resources/data'
import { CardOne, CardTwo } from '../components/cards'



const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      mondliCele: file(relativePath: { eq: "mondli-cele.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      givenSingwane: file(relativePath: { eq: "given-n-singwane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
    }
      lecture: file(relativePath: { eq: "lecture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const photos = [
    data.mondliCele.childImageSharp.fluid,
    data.givenSingwane.childImageSharp.fluid,
    data.lecture.childImageSharp.fluid
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <HomePageWrapper>
        <section>
          <h2>
            <span className='text'>{homeData.aboutTittle}</span>
            <span className='underline'></span>
          </h2>
          {homeData.aboutText.map(text => <p>{text}</p>)}
        </section>

        <section>
          <h2>
            <span className='text'>{homeData.skillsTittle}</span>
            <span className='underline'></span>
          </h2>
          <div className="skills">
            {homeData.mySkills.map(skill => <CardOne
              svg={skill.svgPath}
              skill={skill.skill}
              skillText={skill.aboutSkill}
            />)}
          </div>
        </section>

        <section>
          <h2>
            <span className='text'>{homeData.refTitle}</span>
            <span className='underline'></span>
          </h2>
          <div className="references">
            {homeData.refPerson.map((person, index) => <CardTwo
              photo={photos[index]}
              name={person.name}
              desc={person.desc}
              text={person.text}
            />)}
          </div>
        </section>
      </HomePageWrapper>
    </Layout>
  )
}

export default IndexPage

const HomePageWrapper = styled.div`

  border-radius: .5rem;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: var(--shadow);
  min-height: 40rem;
  width: 100%;

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

  

  section {
    padding: 3rem 2rem;
    padding-bottom: 4rem;

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

    &:nth-child(1) h2 .underline { width: 6.65rem }
    &:nth-child(2) {
      background: var(--bg-color);
      h2 .underline  { width: 6.45rem }
    }
    &:nth-child(3) h2 .underline { width: 7.75rem }

    .skills {
      display: grid;
      grid-template-columns: repeat(3, minmax(14rem, 1fr));
      grid-gap: 1.5rem;   
      .card {
        padding: 1rem;
        background-color: var(--white);
        box-shadow: var(--shadow);
        border-radius: .5rem;
        img {
          width: 5rem;
          margin-bottom: .5rem;  
        }
        p {
          font-size: .875rem;
          width: 100%;
          opacity: .8;
          line-height: 1.5;
          color: rgba(46, 46, 46, .8);
          margin-bottom: 0;
        } 
      }
      @media only screen and (max-width: 37.5em ) {
        grid-template-columns:  minmax(14rem, 1fr);
      }
    }

    .references {
      
      display: grid;
      grid-template-columns: repeat(3, minmax(14rem, 1fr));
      grid-gap: 2rem;
      align-items: flex-start;
      
      .card {
        padding: 1em;
        background-color: $white-color;
        box-shadow: var(--shadow);
        border-radius: .5rem;
      
      .card-header {
        display: grid;
        grid-template-columns: 4rem 1fr;
        padding-bottom: 1em;
        border-bottom: 2px solid rgba(49, 49, 49, .12);
        grid-column-gap: .5rem;

        h3 {
          display: block;
          margin-bottom: 0;
          font-size: 1rem;
          align-self: flex-end;
        }

        p {
          padding: 0;
          margin: 0;
          font-size: .75rem;
          font-weight: 500;
          width: 100%;
        }
      }

      .photo {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        width: 3.5rem;
        border-radius: 50%;
        justify-self: center;
      }

      p {
        padding-top: 1em;
        font-size: .875rem;
        opacity: .8;
        margin: 0;
      }

    }
    @media only screen and (max-width: 37.5em ) {
      grid-template-columns:  minmax(10rem, 1fr);
    }

    }
  }

`
