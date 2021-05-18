import React, { useContext } from "react"
import styled from "styled-components"

//context
import { StoreContext } from "../../context/StoreContext"

//images
import Plus from "../../images/plus.svg"

const AddToCartContainer = styled.button`
  height: 40px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

const AddToCart = ({ variantId }) => {
  const { addProductToCart } = useContext(StoreContext)
  return (
    <AddToCartContainer onClick={e => addProductToCart(variantId)}>
      <img src={Plus} alt="" />
    </AddToCartContainer>
  )
}

export default AddToCart
