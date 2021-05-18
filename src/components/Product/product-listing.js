import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

//components
import ProductListingItem from "./product-listing-item"

const ProductListingContainer = styled.div`
  width: 100%;
  height: 100%;
`

const ProductListing = () => {
  const data = useStaticQuery(graphql`
    query ProductsQuery {
      allShopifyProduct {
        edges {
          node {
            title
            description
            shopifyId
            images {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: WEBP
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 100
                  )
                }
              }
            }
            variants {
              price
              shopifyId
              title
              compareAtPrice
            }
          }
        }
      }
    }
  `)
  const productsListing = data?.allShopifyProduct?.edges
  console.log(productsListing)

  return (
    <ProductListingContainer>
      {productsListing.map(node => {
        return <ProductListingItem key={node?.id} product={node} />
      })}
    </ProductListingContainer>
  )
}

export default ProductListing
