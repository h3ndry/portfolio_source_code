import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Profile = ({name}) => {
  
  const data = useStaticQuery(graphql`
    query {
      userPhoto: file(relativePath: { eq: "user.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <ProfileWrapper>
    <h1>
        {name}
        <span>Computer Engineer</span>
      </h1>

      <Img className="profile__image" fluid={data.userPhoto.childImageSharp.fluid} />


      <div className="profile__details">
        <ul>
          <div className="svg-icon">
            <svg viewBox="0 0 145 116" >
            <path d="M63.2,115.9l-13.8-4c-1.4-0.4-2.3-1.9-1.9-3.4L78.4,2c0.4-1.4,1.9-2.3,3.4-1.9l13.8,4c1.4,0.4,2.3,1.9,1.9,3.4L66.6,114
              C66.1,115.4,64.6,116.3,63.2,115.9z M37.4,90.4l9.9-10.5c1-1.1,1-2.9-0.2-3.9L26.5,58L47,39.9c1.2-1,1.2-2.8,0.2-3.9l-9.9-10.5
              c-1-1.1-2.7-1.2-3.9-0.1L0.9,56c-1.2,1.1-1.2,2.9,0,4l32.6,30.6C34.6,91.6,36.3,91.5,37.4,90.4L37.4,90.4z M111.5,90.6L144.1,60
              c1.2-1.1,1.2-2.9,0-4l-32.6-30.6c-1.1-1-2.8-1-3.9,0.1L97.8,36c-1,1.1-1,2.9,0.2,3.9L118.5,58L97.9,76c-1.2,1-1.2,2.8-0.2,3.9
              l9.9,10.5C108.6,91.5,110.4,91.6,111.5,90.6L111.5,90.6z"/>
            </svg>
          </div>

          <li><span>Name:</span> Simanga Hendry</li>
          <li><span>Surname:</span> Khoza</li>
          <li><span>Birth:</span> 22 May 1995</li>
          <li><span>Email:</span> simanhahk@gmail.com</li>
          <li><span>Qualif.</span> Computer System Eng</li>
        </ul>
      </div>

      <a href={'hello'} className="btn-download">
        <button className='animated-bg'> 
          <span style={{transform: `translateY(-1px)`}}>Download My CV</span>
          <span className='icon'>
          <svg  viewBox="0 0 512 512" >
          <path d="M216,0h80c13.3,0,24,10.7,24,24v168h87.7c17.8,0,26.7,21.5,14.1,34.1L269.7,378.3c-7.5,7.5-19.8,7.5-27.3,0L90.1,226.1
            c-12.6-12.6-3.7-34.1,14.1-34.1H192V24C192,10.7,202.7,0,216,0z M512,376v112c0,13.3-10.7,24-24,24H24c-13.3,0-24-10.7-24-24V376
            c0-13.3,10.7-24,24-24h146.7l49,49c20.1,20.1,52.5,20.1,72.6,0l49-49H488C501.3,352,512,362.7,512,376z M388,464c0-11-9-20-20-20
            s-20,9-20,20s9,20,20,20S388,475,388,464z M452,464c0-11-9-20-20-20s-20,9-20,20s9,20,20,20S452,475,452,464z"/>
          </svg>
         </span>
      </button>
    </a>

  </ProfileWrapper>
)
}

export default Profile

const ProfileWrapper = styled.div`
  grid-area: profile;
  max-width: 500px;
  width: 100%;
  align-self: flex-start;
  box-shadow: 1px 1px 40px rgba($black-color, .15);

`