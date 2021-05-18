import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//components
import CollectionGridItem from "./collection-grid-item"

//Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SingleCollectionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  .single-collection-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    .details-container {
      display: flex;
      flex: 1 0 25%;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      h1 {
        color: white;
      }
    }
    .product-wrapper {
      height: 100%;
      flex: 1 0 75%;
      max-width: 75%;
      display: flex;
      justify-content: space-around;
      .slick-slider {
        padding: 0 2rem 0 2rem;
        width: 100%;
        .slick-prev {
          margin-left: 2rem;
          z-index: 3;
          &.slick-prev::before {
            color: #708090;
            min-width: 100px;
          }
        }
        .slick-next {
          margin-right: 2rem;
          z-index: 3;
          &.slick-next::before {
            color: #708090;
            min-width: 100px;
          }
        }
        .slick-track {
          width: 100% !important;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-start;
          width: 100%;
          .slick-slide {
            flex: none;
            padding: 0.5rem;
          }
        }
      }
    }
  }
`
const SingleCollection = collection => {
  const singleCollection = collection.collection.node
  let collectionSlickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <SingleCollectionContainer>
      <div class="single-collection-wrapper">
        <div class="details-container">
          <h1>{singleCollection.title}</h1>
          <p>Shop all of our {singleCollection.title} products!</p>
          <p>
            <a href="/">Shop {singleCollection.title} Products</a>
          </p>
        </div>
        <div class="product-wrapper">
          <Slider {...collectionSlickSettings}>
            {singleCollection.products.map(product => {
              return <CollectionGridItem product={product} />
            })}
          </Slider>
        </div>
      </div>
    </SingleCollectionContainer>
  )
}

export default SingleCollection
