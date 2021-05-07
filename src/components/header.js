import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

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
    .brand-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 25%;
      h3 {
        color: white;
        font-weight: 800;
        margin: 0;
        padding: 0;
      }
    }
    .nav-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
      .nav {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        .nav-item {
          color: white;
          padding: 0 1rem 0 1rem;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: 600;
          margin: 0;
        }
      }
    }
    .cart-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: 25%;
      h3 {
        color: white;
        padding: 0;
        margin: 0;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <div class="header-wrapper">
        <div className="brand-wrapper">
          <h3>Concept Brand</h3>
        </div>
        <div className="nav-wrapper">
          <ul className="nav">
            <li className="nav-item">Shop</li>
            <li className="nav-item">Men</li>
            <li className="nav-item">Women</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact Us</li>
          </ul>
        </div>
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
