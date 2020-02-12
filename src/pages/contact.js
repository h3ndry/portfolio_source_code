import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { headerData } from '../resources/data'

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactWrapper>
      <section className="contact-section">
        <div className="form">
          <h2>
            <span className='text'>Contact Form</span>
            <span className='underline'></span>
          </h2>



          <form action="contactform.php" method="post">

            <div className="label">
              <input
                required minLength='3'
                type="text" name="name"
                placeholder="Name" />
              <svg viewBox='0 0 20 20' className='icon' >
                <path d="M0 0 L10 10 L0 20"  ></path>
              </svg>
            </div>

            <div className="label">
              <input type="text" name="mail"
                required pattern="[a-z0-9.%_+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="E-mail"
              />
              <svg viewBox='0 0 20 20' className='icon' >
                <path d="M0 0 L10 10 L0 20"  ></path>
              </svg>
            </div>

            <div className="text-area">
              <textarea name="message"
                required minLength='20'
                placeholder="Message" id="" cols="30" rows="5" />
              <svg viewBox='0 0 20 20' className='icon' >
                <path d="M0 0 L10 10 L0 20"  ></path>
              </svg>
            </div>

            <button type="submit" name="submit">Submit</button>
          </form>
        </div>

        <div className="details">
          <h2>
            <span className='text'>Contact</span>
            <span className='underline'></span>
          </h2>
          <ul>
            <li> <span>Address:</span> 3112 MaryGold Street Section 1 Vereeningeng 1084</li>
            <li> <span>Phone:</span> +27 81 249 0306</li>
            <li> <span>Job:</span> Student </li>
            <li> <span>Skype:</span> henkhodryza</li>
            <li> <span>reddit:</span> henkhodryza</li>
            <li> <span>Email:</span> simangahk@gmail.com</li>
          </ul>
          <div className="social-icon">
            {headerData.socialLinks.map((link, index) => <a
              key={index}
              href={link.to}>
              <svg viewBox={link.viewBox}>
                <path d={link.svgPath} />
              </svg>
            </a>)}
          </div>
        </div>
      </section>
      <section className="section-map">
        <h2>
          <span className='text'>Map</span>
          <span className='underline'></span>
        </h2>
        <h2 className="heading-2"></h2>
        <iframe
          style={{ width: "100%", height: "300px", frameborder: "none", border: "none", allowfullscreen: "" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17104.568113698915!2d31.82287876661536!3d-25.678172234370344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6323d318e34c7%3A0x4cc58d7b884592ae!2sSincobile%20Secondary%20School!5e0!3m2!1sen!2sza!4v1572337631299!5m2!1sen!2sza"
        >

        </iframe>

      </section>
    </ContactWrapper>
  </Layout>
)

export default SecondPage

const ContactWrapper = styled.div`
  border-radius: .5rem;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: var(--shadow);
  min-height: 40rem;
  width: 100%;

  .contact-section {
    padding: 3rem 2rem;
    padding-bottom: 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    @media screen and (max-width: 41.875em) {
      grid-template-columns: 1fr;
      grid-row-gap: 6rem;
    }
  }

  .form {
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
          width: 9rem;
          opacity: .5;
          background-color: var(--sec-color);
          transform: translate(-4px, -10px);
          z-index: 0;
        }
      }
      
      form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: .875rem;
        font-family: var(--display-font);
        grid-row-gap: 2rem;

        @media screen and (max-width: 26.625em) {
          grid-template-columns: 1fr;
        }


        .text-area {
          grid-column: 1 / -1;
        }

        .label,
        .text-area {
          display: flex;
          align-content: center;
        }


        .icon {
          width: 1rem;
          height: 1rem;
          fill: none;
          stroke: black;
          order: -1;
          transition: all .2s;
          stroke-dasharray: 0, 20;
          stroke-dashoffset: -14.142;
          margin: .75rem .5em;
        }
      }

      input,
      textarea {
        display: inline-block;
        font-family: inherit;
        font-size: inherit;
        padding: .75rem .5em;
        border: none;
        border-bottom: 2px solid rgba(95, 95, 95, .12);
        width: 100%;

        &:valid {
          border-color: hsl(166, 72%, 40%);
        }

        &:focus {
          outline: none;
        }

        &:focus + .icon {
          outline: none;
          opacity: 1;
          stroke-dasharray: 28.284, 20;
          stroke-dashoffset: 0;
       
        }
      }


      button {
        color: var(--grey);
        background-color: var(--pri-color);
        font-weight: 500;
        padding: .5em 1.5em;
        justify-self: left;
        margin-left: 1.5rem;
        transition: all .2s linear;
        font-size: 1rem;
        border-radius: 30rem;
        border: none;
        cursor: pointer;

         &:hover { background-color: var(--sec-color) }
      }
    }

    .details {
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
          width: 5.5rem;
          opacity: .5;
          background-color: var(--sec-color);
          transform: translate(-4px, -10px);
          z-index: 0;
        }
      }
      
    & ul {
      list-style: none;
      padding-top:  1em;
      margin-top: 0;
      margin-bottom: 2em 0;
      padding-left: 0;
      font-size: .875rem;

      & li {
        position: relative;
        margin-bottom: 1em;
        /* // padding-left: 1.5em; */
        color: rgb(95, 95, 95);
        font-weight: 400;
        
        & span {
          color: var(--black);
        }

      }
    }

    .social-icon {
      a {
        color: var(--black);
        padding: .7em .5em;
        &:last-child {
          margin-right: 1rem;
        }
        &:hover {
          color: var(--sec-color);
        }
        svg {
          transition: all .2s linear;
          height: .75rem;
          width: .75rem;
          fill: currentColor;
        }
      }
    }
  }

  .section-map {
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
        width: 3.5rem;
        opacity: .5;
        background-color: var(--sec-color);
        transform: translate(-4px, -10px);
        z-index: 0;
        }
      }
  }

`