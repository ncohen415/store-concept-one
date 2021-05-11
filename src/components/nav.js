import React from "react"
import styled from "styled-components"
import { media } from "./mq"
import { motion } from "framer-motion"

const NavWrapper = styled(motion.div)`
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #343434;
  height: 32vh;
  width: 100%;
  z-index: 1;
  ${media.small`flex-direction: row; justify-content: center; height: 75px;`}
  ${media.medium`display: flex; align-items: center; justify-content: center; background-color: transparent; width: 50%; opacity: 1 !important;`}
  .nav {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    ${media.small`flex-direction: row;`}
    .nav-item {
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: 600;
      margin: 0;
      font-size: 25px;
      padding: 0 0 1.5rem 0;
      ${media.small`padding: 0 1rem 0 1rem; font-size: 16px;`}
    }
  }
`

const Nav = ({ isOpen }) => {
  console.log(isOpen)
  return (
    <NavWrapper
      key="nav-wrapper"
      initial="closed"
      animate={isOpen === true ? "open" : "closed"}
      exit="closed"
      variants={{
        open: { y: "76%", opacity: 1, zIndex: 1 },
        closed: { y: 0, opacity: 0, zIndex: 0 },
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <ul className="nav">
        <li className="nav-item">Shop</li>
        <li className="nav-item">Men</li>
        <li className="nav-item">Women</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
