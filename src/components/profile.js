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

      <Img className="user-photo" fluid={data.userPhoto.childImageSharp.fluid} />


      <div className="details">
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

      <a href={'hello'} className="btn">
        <span>Download My CV </span>
        
        <span className='icon'>
          <svg  viewBox="0 0 512 512">
            <path d="M216,0h80c13.3,0,24,10.7,24,24v168h87.7c17.8,0,26.7,21.5,14.1,34.1L269.7,378.3c-7.5,7.5-19.8,7.5-27.3,0L90.1,226.1
              c-12.6-12.6-3.7-34.1,14.1-34.1H192V24C192,10.7,202.7,0,216,0z M512,376v112c0,13.3-10.7,24-24,24H24c-13.3,0-24-10.7-24-24V376
              c0-13.3,10.7-24,24-24h146.7l49,49c20.1,20.1,52.5,20.1,72.6,0l49-49H488C501.3,352,512,362.7,512,376z M388,464c0-11-9-20-20-20
              s-20,9-20,20s9,20,20,20S388,475,388,464z M452,464c0-11-9-20-20-20s-20,9-20,20s9,20,20,20S452,475,452,464z"/>
          </svg>
        </span>

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
  box-shadow: var(--shadow);

  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 4rem repeat(2, min-content) 7rem;

  background-color: var(--white);
  border-radius: .5rem;

  h1 {
    grid-column: 2 / 3;
    align-self: center;
    padding-top: 1em;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--black);
    font-size: 1.5rem;
    font-weight: 700;
    
    span {
      text-transform: capitalize;
      color: grey;
      font-size: 1rem;
      display: block;
      letter-spacing: 2px;
      font-weight: 400;
      
    }
  }

  .user-photo {
    grid-column: 1 / -1;
    -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }

  .details {
    grid-column: 2 / 3;
    font-size: .875rem;
      
    & ul {
      list-style: none;
      padding-top: 3em;
      margin-top: 0;
      margin-bottom: 2em 0;
      padding-left: 0;
      border-left: solid 2px rgba(95, 95, 95, .2);
      position: relative;

      .svg-icon {
        position: absolute;
        padding: .5rem;
        border-radius: 50%;
        background-color: var(--pri-color);
        text-align: center;
        top: -2rem;
        left: -1.4rem;
        height: 3rem;
        width: 3rem;
        box-shadow: var(--shadow);

        svg {
          height: 2rem;
          width: 2rem;
          fill: var(--grey);
        }
        
      }
      
      & li {
        position: relative;
        margin-bottom: 1em;
        padding-left: 1.5em;
        color: #5f5f5f;
        font-weight: 400;
        
        & span {
          font-size: .875rem;
          color: var(--black);
        }
          &::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            left: -5px;
            top: 4px;
            border-radius: 50%;
            border: solid 2px var(--pri-color);
          }
      }
    }
  }

  .btn {
    grid-column: 2 / 3;
    align-self: center;
    text-align: center;
    justify-self: center;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 30rem;
    color: var(--grey);
    background-color: var(--pri-color);
    padding: .25em .25em .25em 1.25em;
    transition: all .2s linear;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    text-decoration: none;
    
    &:hover { background-color: var(--sec-color) }

    span { 
      display: inline-block;
      &.icon {
        width: 2rem;
        height: 2rem;
        padding: .5rem;
        margin-left: 1rem;
        background-color: var(--white);
        border-radius: 50%;
      }
    }
  }

`