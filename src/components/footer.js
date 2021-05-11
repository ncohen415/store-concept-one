import React from "react"
import styled from "styled-components"
import { media } from "./mq"

const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #343434;
  padding: 0 2rem 0 2rem;
  border-top: 1px solid white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  ${media.small`height: 300px;`}
  .footer-wrapper {
    display: flex;
    align-items: baseline;
    padding: 2rem 0 2rem 0;
    width: 100%;
    height: 100%;
    .footer-left {
      display: flex;
      flex-direction: column;
      flex: 1 50%;
      h3 {
        color: white;
      }
      .list-wrapper {
        display: flex;
        ul {
          list-style: none;
          margin: 0;
          padding-right: 4rem;
          color: white;
        }
      }
    }
    .footer-right {
      display: flex;
      flex-direction: column;
      flex: 1 50%;
      .email-submission {
        color: white;
        input {
          width: 100%;
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div class="footer-wrapper">
        <div class="footer-left">
          <h3>Concept Brand</h3>
          <div class="list-wrapper">
            <ul>
              <li>Shop</li>
              <li>About Us</li>
              <li>Shipping</li>
              <li>Gift Cards</li>
            </ul>
            <ul>
              <li>Contact & FAQ</li>
              <li>Terms of Service</li>
              <li>Return & Exchange Policy</li>
              <li>Social SVGs here</li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <div class="email-submission">
            <p>
              Sign up to enjoy free U.S. shipping and returns on your first
              order
            </p>
            <input type="text" />
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
