import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import React, { useRef, useEffect, useState } from "react"

import { headerData } from '../resources/data'

const Header = ({ siteTitle }) => {

  let menu = useRef(null)
  let nav = useRef(null)
  let hireBtn = useRef(null)
  let navBg = useRef(null)

  useEffect(() => {
    // // I am just trying if this worlk
    // navBg.classList.add('active')
    // nav.classList.add('active')

    nav.classList.remove('active')
    hireBtn.classList.remove('active')
    menu.classList.remove('active')
    navBg.classList.remove('active')


    menu.addEventListener('click', () => {
      nav.classList.toggle('active')
      hireBtn.classList.toggle('active')
      menu.classList.toggle('active')
      navBg.classList.toggle('active')


    })

  }, [])

  return (
    <HeaderWrapper>
       <div className="home" >
      <Link className='link' to='/'></Link>
      <svg className="home__icon" viewBox="0 0 696 588">
        <path d="M280.4,116.2L96,268.1V432c0,8.8,7.2,16,16,16l112.1-0.3c8.8,0,15.9-7.2,15.9-16V336c0-8.8,7.2-16,16-16h64
      	c8.8,0,16,7.2,16,16v95.6c0,8.8,7.1,16,15.9,16c0,0,0,0,0.1,0l112,0.3c8.8,0,16-7.2,16-16V268L295.7,116.2
      	C291.2,112.6,284.9,112.6,280.4,116.2L280.4,116.2z M571.6,219.4L488,150.5V12c0-6.6-5.4-12-12-12h-56c-6.6,0-12,5.4-12,12v72.6
      	L318.5,11c-17.7-14.6-43.3-14.6-61,0L4.4,219.4c-5.1,4.2-5.8,11.8-1.6,16.9c0,0,0,0,0,0l25.5,31c4.2,5.1,11.8,5.9,16.9,1.6
      	c0,0,0,0,0,0L280.4,75.2c4.5-3.6,10.8-3.6,15.3,0L530.9,269c5.1,4.2,12.7,3.5,16.9-1.6c0,0,0,0,0,0l25.5-31
      	C577.5,231.2,576.8,223.7,571.6,219.4C571.6,219.4,571.6,219.4,571.6,219.4L571.6,219.4z" />
      </svg>
    </div>
      <ul className='nav active' ref={el => nav = el} >
        <li><Link activeStyle={{ color: `#ef0078` }} to='/'>Home</Link></li>
        <li><Link activeStyle={{ color: `#ef0078` }} to='/resume'>Resume</Link></li>
        <li><Link activeStyle={{ color: `#ef0078`}} to='/portfolio'>Portfolio</Link></li>
        <li><Link activeStyle={{ color: `#ef0078` }} to='/contact'>Contact</Link></li >
    </ul >
    <div className="social-icon">
        {headerData.socialLinks.map((link, index) => <a
          key={index}
          target="_blank"
          href={link.to}>
          
          <svg viewBox={link.viewBox}>
            <path d={link.svgPath}/>
          </svg>
      </a> )}
    </div>
        <a 
          className='hire-btn animated-bg active' ref={el => hireBtn = el}
          href="https://wa.me/27812490306?text=Hello%20I'm%20interested%20in%20Hiring%20you">
          Hire Me
          <span className="icon">
            <svg viewBox="0 0 448 375.7" >
            <path d="M446.7,34.2L379.1,353c-5.1,22.5-18.4,28.1-37.3,17.5l-103-75.9l-49.7,47.8c-5.5,5.5-10.1,10.1-20.7,10.1l7.4-104.9
              L366.7,75.1c8.3-7.4-1.8-11.5-12.9-4.1l-236,148.6L16.2,187.8c-22.1-6.9-22.5-22.1,4.6-32.7L418.2,2C436.6-4.9,452.7,6.1,446.7,34.2
              z"/>
            </svg>
          </span>
      </a>

      <div className="nav-bg active" ref={el => navBg = el}></div>
    <div className='icon-menu active' ref={ el => menu = el } >
      <span></span>
    </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
  grid-area: header;
  align-self: flex-start;
  position: relative;
  width: 100%;
  display: flex;
  height: 4.5rem;
  border-radius: .5rem;
  padding-right: 1.25rem;
  background-color: var(--white);
  box-shadow: 0px 0px 30px rgba(46, 46, 46, .1);
  align-items: center;


  .home {
   background-color: var(--pri-color);
   height: 100%;
   border-top-left-radius: .5rem;
   border-bottom-left-radius: .5rem;
   width: 5rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   position: relative;
   transition: all .2s linear;

   &:hover {
     background-color: var(--sec-color);
   }

   .link {
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;

   }
   
    svg {
      height: 1.5rem;
      width: 1.5rem;
      fill: var(--grey);
      margin: 0 auto;
    }
  }

  .nav {
    display: flex;
      list-style: none;
      padding-left: .5rem;
      margin-right: auto;
      
      li {
        &:first-child {display: none;}
      }
    

    a {
      display: inline-block;
      font-family: inherit;
      text-decoration: none;
      font-size: .875rem;
      color: var(--black);
      text-transform: uppercase;
      font-weight: 500;
      cursor: pointer;
      transition: all .2s linear;
      padding: .5em .5em;

      &:hover {
        color: var(--sec-color)
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

  .nav-bg {
    position: fixed;
    display: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    top: 4.15rem;
    right: 2.75rem;
    background-color: var(--black);
    z-index: 9;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    &.active {transform: scale(80);}
  }
  .icon-menu {
    background-color: var(--pri-color);
    color: var(--white);
    position: fixed;
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;
    transition: all .2s cubic-bezier(0.65, 0.05, 0.36, 1);
    z-index: 15;
    top: 3.875rem;
    right: 2.5rem;

  & span {
    display: inline-block;
    position: relative;
    background-color: rgba(255, 255, 255, .8);
    height: 2px;
    border-radius: 2px;
    width: 1.8rem;
    margin: 0 auto;
    transition: all .2s cubic-bezier(0.65, 0.05, 0.36, 1);

    &::after,
    &::before {
      position: absolute;
      border-radius: 2px;
      content: '';
      display: inline-block;
      background-color: rgba(255, 255, 255, .8);
      height: 2px;
      width: 1.8rem;
      margin: 0 auto;
      left: 0;
      transition: all .2s cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    &::after { top: 8px }
    &::before { top: -8px }

  }

  &.active span {
    background-color: transparent;    
    &::after { 
      top: 0; 
      background-color: rgba(255, 255, 255, .8);
      transform: rotate(135deg); 
    }
    &::before {
      top: 0;
      transform: rotate(-135deg);
      background-color: rgba(255, 255, 255, .8)
    }
  }
  @media only screen and (max-width: 41.875em) {
    display: flex;
  }
}

  .hire-btn { 
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 30rem;
    color: var(--grey);
    background-color: var(--pri-color);
    padding: .25em .25em .25em 1em;
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

  @media screen and (max-width: 41.875em) {
    justify-content: space-between;
    .social-icon a:last-child { margin-right: 0 }
    .nav-bg { display: block;}

    .nav {
      height: 100vh;
      width: 100vw;
      position: fixed;
      flex-direction: column;
      left: 0;
      top: 0;
      opacity: 0;
      text-align: center;
      padding: 6rem;
      padding-top: 8rem;
      z-index: 11;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: scaleX(0);
      transform-origin: left;

      li {
    
        border-bottom: 1px solid var(--pri-color);
        margin-bottom: 1rem;
        &:first-child {display: inline-block}
        

        a,
        a:active,
        a:link {
          font-size: 1.875rem;
          letter-spacing: 1px;
          color: lightgrey;     
        }
      }

    
      &.active {
        transform: scaleX(1);
        opacity: 1;
      }

    }
   
  }
`
