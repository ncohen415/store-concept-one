import React from "react"
import styled from "styled-components"
import { media } from "../mq"
import { Link } from "gatsby"

const NavItemWrapper = styled.li`
  margin: 0;
  padding: 0 0 1.5rem 0;
  ${media.small`padding: 0 1rem 0 1rem;`}
  a {
    color: white;
    font-size: 25px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    ${media.small` font-size: 16px;`}
    &:hover {
      opacity: 0.7;
    }
  }
`

const NavItem = ({ menuItem }) => {
  return (
    <NavItemWrapper>
      <Link to={menuItem.url}>{menuItem.label}</Link>
    </NavItemWrapper>
  )
}

export default NavItem
