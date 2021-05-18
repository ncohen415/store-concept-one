import React from "react"
import styled from "styled-components"
import { media } from "../mq"
import { motion } from "framer-motion"

//components
import NavItem from "./nav-item"

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
  z-index: 0;
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
  }
`

const Nav = ({ isOpen, menu }) => {
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
        {menu.map(menuItem => {
          return <NavItem menuItem={menuItem} />
        })}
      </ul>
    </NavWrapper>
  )
}

export default Nav
