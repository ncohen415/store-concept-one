import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

//components
import Layout from "../components/layout"
import CollectionListing from "../components/Collection/collection-listing"

const ShopPageContainer = styled.div`
  height: 100%;
  width: 100%;
`

const Shop = () => {
  return (
    <Layout>
      <ShopPageContainer>
        <CollectionListing />
      </ShopPageContainer>
    </Layout>
  )
}

export default Shop
