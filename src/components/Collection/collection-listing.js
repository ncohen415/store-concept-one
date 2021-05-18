import React from "react"
import { graphql, ustStaticQuery, useStaticQuery } from "gatsby"
import styled from "styled-components"

//components
import SingleCollection from "./single-collection"

//Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CollectionListingContainer = styled.div`
  height: 100%;
  width: 100%;
`

const CollectionListing = () => {
  const data = useStaticQuery(graphql`
    query CollectionsQuery {
      allShopifyCollection {
        edges {
          node {
            title
            products {
              title
              shopifyId
              variants {
                title
                price
                selectedOptions {
                  name
                  value
                }
                shopifyId
              }
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
            }
          }
        }
      }
    }
  `)
  const collectionsListing = data.allShopifyCollection.edges
  return (
    <CollectionListingContainer>
      {collectionsListing.map(node => {
        return <SingleCollection key={node.id} collection={node} />
      })}
    </CollectionListingContainer>
  )
}

export default CollectionListing
