import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductContainer = styled.article`
  height: 50vh;
  width: 50vw;
`

const ProductListingItem = product => {
  const listingItem = product?.product?.node
  return (
    <ProductContainer>
      <h3>{listingItem.title}</h3>
      <p>{listingItem.description}</p>
    </ProductContainer>
  )
}

export default ProductListingItem
