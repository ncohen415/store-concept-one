import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { media } from "../components/mq"

//components
import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import ArrowDown from "../images/arrowdown.svg"

//Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 4rem;
  /* UNIVERSAL SLICK STYLES */
  .slick-slider {
    display: flex;
    align-items: center;
    width: 100%;
    height: 55vh;
    ${media.medium`height: 60vh;`}
    .slick-prev {
      margin-left: 1rem;
      z-index: 3;
      &.slick-prev::before {
        color: #708090;
        min-width: 100px;
      }
    }
    .slick-next {
      margin-right: 1rem;
      z-index: 3;
      &.slick-next::before {
        color: #708090;
        min-width: 100px;
      }
    }
    .slick-list {
      height: 60vh;
      width: 100%;
      .slick-track {
        display: flex !important;
        align-items: center;
        .slick-slide {
          height: 100% !important;
          margin: 0 0.5rem 0 0.5rem;
          ${media.medium`margin: 0;`}
          div {
            height: 60vh;
            .gatsby-image-wrapper {
              height: inherit;
              img {
                object-fit: contain !important;
                height: 100%;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }

  /* UNIVERSAL THEMATIC BREAK STYLES */
  hr {
    border: 0;
    height: 1px;
    background-color: white;

    margin: 5rem auto 5rem auto;
    ${media.small`width: 350px;`}
    ${media.medium`margin: 3rem auto 3rem auto;`}
  }

  .featured-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 1vh;
    ${media.medium`height: 100vh;`}
    .content-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      ${media.medium`flex-direction: row;`}
      .content-left {
        flex: 1 50%;
        h1 {
          text-align: center;
          color: white;
          margin: 0;
          font-weight: 900;
          font-size: 7vh;
          ${media.small`font-size: 9vh;`}
          ${media.medium`text-align: left;`}
        }
        .slick-slider {
          display: flex;
          align-items: center;
          height: 60vh;
          height: 60vh;
          ${media.medium`height: 75vh; width: 50vw;`}
          .slick-prev {
            display: none !important;
            z-index: 3;
            &.slick-prev::before {
              color: #708090;
              min-width: 100px;
            }
          }
          .slick-next {
            display: none !important;
            z-index: 3;
            &.slick-next::before {
              color: #708090;
              min-width: 100px;
            }
          }
          .slick-list {
            height: 75vh;
            .slick-track {
              display: flex !important;
              align-items: center;
              .slick-slide {
                height: 100% !important;
                margin: 0 0.5rem 0 0.5rem;
                ${media.medium`margin: 0 1rem 0 0;`}
                div {
                  height: 75vh;
                  .gatsby-image-wrapper {
                    height: inherit;
                    padding: 0 1rem 0 1rem;
                    img {
                      object-fit: contain !important;
                      height: 100%;
                      margin: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .arrow-wrapper {
        display: flex;
        justify-content: center;
        margin: 4rem 0 0 0;
        ${media.medium`height: 80%; justify-content: flex-end; flex-direction: column; margin: 0;`}
        img {
          margin: 0;
          padding: 0;
          height: 50px;
          width: 50px;
        }
      }
      .content-right {
        flex: 1 50%;
        margin-top: 40px;
        ${media.medium`margin: 0;`}
        .streetwear-collection-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          ${media.medium`align-items: flex-end;`}
          h1 {
            color: white;
            width: 100%;
            font-weight: 900;
            font-size: 5vh;
            text-align: center;
            padding: 0;
            margin: 0 0 2rem 0;
            ${media.small`font-size: 9vh;`}
            ${media.medium`text-align: right;`}
          }
          .shop-now {
            width: 50%;
            display: inline-block;
            padding: 0.35em 1.2em;
            border: 0.13em solid #ffffff;
            margin: 0 0 2rem 0;
            border-radius: 0.2em;
            box-sizing: border-box;
            text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-weight: 600;
            font-size: 2.5vh;
            color: #ffffff;
            text-align: center;
            transition: all 0.2s;
            cursor: pointer;
            height: 6vh;
            display: flex;
            justify-content: center;
            align-items: center;
            ${media.small`width: 30%;`}
            &:hover {
              color: #000000;
              background-color: #ffffff;
            }
          }
          p {
            color: white;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: 2.5vh;
            width: 70%;
            line-height: 1;
            width: 100%;
            ${media.medium`text-align: right;`}
          }
        }
      }
    }
  }
  .video-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.medium`height: 75vh;`}
    .video-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      iframe {
        margin: 0;
        padding: 0;
      }
    }
  }
  .new-arrivals-section {
    width: 100%;
    ${media.medium`height: 75vh;`}
    h1 {
      margin: 0 0 25px 0;
      padding: 0;
      color: white;
    }
  }
  .filler-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    .content-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      flex-direction: column;
      ${media.medium`flex-direction: row;`}
      .content-left {
        display: flex;
        flex-direction: column;
        flex: 1 50%;
        justify-content: center;
        height: 100%;
        width: 100%;
        .text-wrapper {
          align-items: center;
          p {
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: 16px;
            text-align: center;
            padding: 0;
            ${media.medium`text-align: left; padding-right: 2rem;`}
          }
          h3 {
            color: white;
            text-align: center;
            ${media.medium`text-align: left;`}
          }
        }
      }
      .content-right {
        display: flex;
        justify-content: flex-end;
        flex: 1 50%;
        height: 100%;
        .image-wrapper {
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0;
          ${media.medium`width: 40vw; padding-left: 2rem;`}
          .gatsby-image-wrapper {
            max-height: 100%;
            img {
              object-fit: contain !important;
            }
          }
        }
      }
    }
  }
  .sale-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.medium`height: 75vh;`}
    h1 {
      color: white;
    }
  }
  .categories-section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      color: white;
    }
    .categories-wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      .category {
        display: flex;
        align-items: center;
        width: 100%;
        .image-wrapper {
          flex: 1 50%;
          height: 20vh;
          ${media.small`width: 50vw; height: 40vh;`}
          ${media.medium`height: 85vh;`}
          .gatsby-image-wrapper {
            height: inherit;
            width: inherit;
            img {
              object-fit: cover !important;
              height: 100%;
              margin: 0;
            }
          }
        }
        .category-name {
          flex: 1 50%;
          h1 {
            text-align: center;
          }
        }
      }
    }
  }
`
const IndexPage = () => {
  let defaultSlickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  let featuredSlickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <Layout>
      <Seo title="Home" />
      <HomePageContainer>
        <section class="featured-section">
          <div class="content-wrapper">
            <div class="content-left">
              <h1>FEATURED</h1>
              <Slider {...featuredSlickSettings}>
                <StaticImage src="../images/ozer.jpeg" alt="aye" />
                <StaticImage src="../images/ozer.jpeg" alt="aye" />
                <StaticImage src="../images/ozer.jpeg" alt="aye" />
                <StaticImage src="../images/ozer.jpeg" alt="aye" />
                <StaticImage src="../images/ozer.jpeg" alt="aye" />
              </Slider>
            </div>
            <div class="arrow-wrapper">
              <img src={ArrowDown} alt="boob" />
            </div>
            <div class="content-right">
              <div class="streetwear-collection-wrapper">
                <h1>STREETWEAR CONCEPT COLLECTION</h1>
                <a className="shop-now">Shop Now</a>
                <p>
                  Vexillologist coloring book air plant shabby chic poutine
                  edison bulb. Drinking vinegar chartreuse trust fund hell of
                  direct trade. Dreamcatcher lomo pour-over, art party chillwave
                  meh street art tumeric tattooed franzen direct trade four
                  dollar toast before they sold out. Waistcoat kombucha meggings
                  forage, hexagon wolf thundercats aesthetic leggings. Deep v
                  fixie chillwave marfa pok pok butcher.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="video-section">
          <div class="video-wrapper">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/cTyydWn4lkQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <hr />
        <section class="new-arrivals-section">
          <h1>NEW ARRIVALS</h1>
          <Slider {...defaultSlickSettings}>
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
          </Slider>
        </section>
        <hr />
        <section class="filler-section">
          <div class="content-wrapper">
            <div class="content-left">
              <div class="text-wrapper">
                <p>Enamel pin godard raclette bespoke franzen squid </p>
                <h3>Chillwave vape cardigan viral next level</h3>
                <p>
                  I'm baby dIY sustainable cred, vinyl banjo vice readymade.
                  Fingerstache ugh master cleanse migas cronut, narwhal fam
                  typewriter slow-carb. Synth +1 truffaut keytar deep v flannel.
                  Whatever chillwave 90's beard everyday carry hashtag freegan
                  scenester la croix pinterest hoodie small batch before they
                  sold out literally. Vape wolf listicle, distillery
                  single-origin coffee fixie normcore blue bottle vegan disrupt
                  shaman gentrify ennui. 8-bit hashtag heirloom chia.
                </p>
              </div>
            </div>
            <div class="content-right">
              <div class="image-wrapper">
                <StaticImage src="../images/doubleozer.png" />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="sale-section">
          <h1>SALE</h1>
          <Slider {...defaultSlickSettings}>
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
            <StaticImage src="../images/ozer.jpeg" alt="hi" />
          </Slider>
        </section>
        <hr />
        <section class="categories-section">
          <h1>SHOP BY CATEGORY</h1>
          <div class="categories-wrapper">
            <div class="category">
              <div class="image-wrapper">
                <StaticImage src="../images/ozer.jpeg" alt="hi" />
              </div>
              <div class="category-name">
                <h1>SHOP MEN'S</h1>
              </div>
            </div>
            <div class="category">
              <div class="category-name">
                <h1>SHOP WOMEN'S</h1>
              </div>
              <div class="image-wrapper">
                <StaticImage src="../images/ozer.jpeg" alt="hi" />
              </div>
            </div>
            <div class="category">
              <div class="image-wrapper">
                <StaticImage src="../images/ozer.jpeg" alt="hi" />
              </div>
              <div class="category-name">
                <h1>SHOP KID'S</h1>
              </div>
            </div>
          </div>
        </section>
      </HomePageContainer>
    </Layout>
  )
}

export default IndexPage
