import React, { useState } from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

//components
import AddToCart from "../Cart/AddToCart"

//images
import ChevronDown from "../../images/chevron-down.svg"

const CollectionGridItemContainer = styled.div`
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex: 1 1 33%;
  .grid-item-inner-wrapper {
    display: flex;
    flex-direction: column;
    .image-wrapper {
      overflow: hidden;
      .gatsby-image-wrapper {
        height: 70vh;
        text-align: center;
        border: solid white;
        overflow: hidden;
      }
      img {
        vertical-align: middle;
      }
    }
    .shop-wrapper {
      display: flex;
      .details-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 0 40%;
        justify-content: flex-start;
        align-self: center;

        p {
          text-align: left;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 2vh;
          color: white;
        }
      }
      .options-wrapper {
        display: flex;
        flex: 1 0 30%;
        justify-content: center;
        align-items: center;
        select {
        }
      }
      .add-to-cart-wrapper {
        display: flex;
        flex: 1 0 30%;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
`

const CollectionGridItem = ({ product }) => {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0])
  const handleVariantChange = e => {
    let newVariant = product.variants.filter(
      variant => variant.shopifyId === e.target.value
    )[0]
    setCurrentVariant(newVariant)
  }

  return (
    <CollectionGridItemContainer>
      <div class="grid-item-inner-wrapper">
        <div className="image-wrapper">
          <GatsbyImage
            image={getImage(product.images[0].localFile)}
            alt="hey"
          />
        </div>
        <div class="shop-wrapper">
          <div class="details-wrapper">
            <p>{product.title}</p>
            <p>$20</p>
          </div>
          <div class="options-wrapper">
            <select
              name="Size Variant Prices"
              id=""
              onChange={e => handleVariantChange(e)}
            >
              {product.variants?.map(variant => {
                return (
                  <option value={variant.shopifyId}>
                    {variant.selectedOptions[0].value}
                  </option>
                )
              })}
            </select>
          </div>
          <div class="add-to-cart-wrapper">
            <AddToCart variantId={currentVariant.shopifyId} />
          </div>
        </div>
      </div>
    </CollectionGridItemContainer>
  )
}

export default CollectionGridItem
