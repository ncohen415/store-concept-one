import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "./mq"
import { graphql, useStaticQuery } from "gatsby"

//components
import Nav from "./nav"
import { Squash as Hamburger } from "hamburger-react"

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #343434;
  padding: 0 2rem 0 2rem;
  .header-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .brand-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 25%;
      z-index: 2;
      h3 {
        color: white;
        font-weight: 800;
        font-size: 2vh;
        margin: 0;
        padding: 0;
      }
    }
    .hamburger-wrapper {
      display: block;
      z-index: 5;
      ${media.medium`display: none;`}
    }
    .cart-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: 25%;
      z-index: 2;
      h3 {
        color: white;
        font-size: 2vh;
        padding: 0;
        margin: 0;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            url
            path
            label
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const menu = data?.wpMenu.menuItems?.nodes
  console.log(menu)
  return (
    <HeaderContainer>
      <div class="header-wrapper">
        <div className="brand-wrapper">
          <h3>Concept Brand</h3>
        </div>
        <div class="hamburger-wrapper">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" />
        </div>
        <Nav isOpen={isOpen} menu={menu} />
        <div class="cart-wrapper">
          <h3>Cart</h3>
        </div>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
