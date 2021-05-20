import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "../mq"
import { graphql, useStaticQuery } from "gatsby"

//images
import Cart from "../../images/cart.svg"

//context
import { StoreContext } from "../../context/StoreContext"

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
      a {
        text-decoration: none;
        h3 {
          color: white;
          font-weight: 800;
          font-size: 2vh;
          margin: 0;
          padding: 0;
        }
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
      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        height: 24px;
        img {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  const { isCartOpen, addProductToCart, client } = useContext(StoreContext)
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

  return (
    <HeaderContainer>
      <div class="header-wrapper">
        <div className="brand-wrapper">
          <a href="/">
            <h3>Concept Brand</h3>
          </a>
        </div>
        <div class="hamburger-wrapper">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            hideOutline={true}
            color="#ffffff"
          />
        </div>
        <Nav isOpen={isOpen} menu={menu} />
        <div class="cart-wrapper">
          <button onClick={e => console.log("hi")}>
            <img src={Cart} alt="" />
          </button>
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
