/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import SEO from '../seo';
import { GlobalStyle } from "../styles/styles";
const LayoutWrapper = styled.div`
    padding: 1rem;
    padding-top: 0;
    max-height: 100vh;
    max-width: 100vw;
`

const Layout = (props) => {

  return (
    <LayoutWrapper>
      <GlobalStyle />
      {props.children}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
