import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

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
    height: 60vh;
    width: 100%;
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
    width: 350px;
    margin: 25px auto 25px auto;
  }

  .featured-section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding-top: 1vh;
    margin-bottom: 3rem;
    .content-wrapper {
      width: 100%;
      display: flex;
      .content-left {
        flex: 1 50%;
        h1 {
          color: white;
          margin: 0;
          font-weight: 900;
          font-size: 65px;
        }
        .slick-slider {
          display: flex;
          align-items: center;
          height: 90vh;
          width: 100%;
          margin-left: -5rem;
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
            height: 90vh;
            width: 100%;
            .slick-track {
              display: flex !important;
              align-items: center;
              .slick-slide {
                height: 100% !important;
                div {
                  height: 90vh;
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
      }
      .content-right {
        flex: 1 50%;
        .streetwear-collection-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          h1 {
            color: white;
            width: 100%;
            font-weight: 900;
            font-size: 65px;
            text-align: right;
            padding: 0;
            margin: 0 0 2rem 0;
          }
          button {
            width: 200px;
            margin: 0 0 2rem 0;
          }
          p {
            color: white;
            text-align: right;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: 16px;
            width: 70%;
            line-height: 1;
            margin: 0 0 2rem 0;
          }
          .arrow-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            img {
              height: 115px;
              width: 115px;
            }
          }
        }
      }
    }
  }
  .video-section {
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    height: 80vh;
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
    height: 70vh;
    .content-wrapper {
      display: flex;
      align-items: center;
      .content-left {
        flex: 1 40%;
        p {
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
        }
        h3 {
          color: white;
        }
      }
      .content-right {
        flex: 1 60%;
        .image-wrapper {
          height: 100%;
          position: relative;
          .image-wrapper-1 {
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
          .image-wrapper-2 {
            height: 50vh;
            position: absolute;
            top: 35px;
            left: 425px;
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
  .sale-section {
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
          height: 85vh;
          width: 50vw;
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
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <Seo title="Home" />
      <HomePageContainer>
        <section class="featured-section">
          <div class="content-wrapper">
            <div class="content-left">
              <h1>FEATURED</h1>
              <Slider>
                <StaticImage src="../images/ozer.jpeg" alt="aye" width={375} />
              </Slider>
            </div>
            <div class="content-right">
              <div class="streetwear-collection-wrapper">
                <h1>STREETWEAR CONCEPT COLLECTION</h1>
                <button>hi</button>
                <p>
                  Vexillologist coloring book air plant shabby chic poutine
                  edison bulb. Drinking vinegar chartreuse trust fund hell of
                  direct trade. Dreamcatcher lomo pour-over, art party chillwave
                  meh street art tumeric tattooed franzen direct trade four
                  dollar toast before they sold out. Waistcoat kombucha meggings
                  forage, hexagon wolf thundercats aesthetic leggings. Deep v
                  fixie chillwave marfa pok pok butcher.
                </p>
                <div class="arrow-wrapper">
                  <img src={ArrowDown} alt="hi" />
                </div>
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
          <Slider {...slickSettings}>
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
              <p>Enamel pin godard raclette bespoke franzen squid </p>
              <h3>Chillwave vape cardigan viral next level</h3>
              <p>
                I'm baby dIY sustainable cred, vinyl banjo vice readymade.
                Fingerstache ugh master cleanse migas cronut, narwhal fam
                typewriter slow-carb. Synth +1 truffaut keytar deep v flannel.
                Whatever chillwave 90's beard everyday carry hashtag freegan
                scenester la croix pinterest hoodie small batch before they sold
                out literally. Vape wolf listicle, distillery single-origin
                coffee fixie normcore blue bottle vegan disrupt shaman gentrify
                ennui. 8-bit hashtag heirloom chia.
              </p>
            </div>
            <div class="content-right">
              <div class="image-wrapper">
                <div class="image-wrapper-1">
                  <StaticImage src="../images/ozer.jpeg" alt="hi" />
                </div>
                <div class="image-wrapper-2">
                  <StaticImage src="../images/ozer.jpeg" alt="hi" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="sale-section">
          <h1>SALE</h1>
          <Slider {...slickSettings}>
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
