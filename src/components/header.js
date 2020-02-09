import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>Hello This is the header</h1>
  </HeaderWrapper>
)

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
  background-color: $white-color;
  box-shadow: 1px 1px 40px rgba($black-color, .15);
  align-items: center;
`
