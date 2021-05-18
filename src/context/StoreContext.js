import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "concept-brand-1.myshopify.com",
  storefrontAccessToken: "c7e6a81917038cc6d6e03d1332ed6eee",
})

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {},
  client,
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({})
  useEffect(() => {
    initializeCheckout()
  }, [])

  //INITIALIZE CHECKOUT ON MOUNT
  const initializeCheckout = async () => {
    try {
      // if there's a checkout in local storage, get it. if there isn't make one.

      //localstorage API only exists in browser. must check if were using a browser
      const isBrowser = typeof window !== "undefined"

      //check if theres an ID that exists in local storage
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      // make newCheckout mutable
      let newCheckout = null

      //if the checkout is there use that, if not make one.
      if (currentCheckoutId) {
        newCheckout = await client.checkout.fetch(currentCheckoutId)
      } else {
        newCheckout = await client.checkout.create()
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      //set the checkout to state.
      setCheckout(newCheckout)
      console.log(currentCheckoutId)
      console.log(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  //ADD PRODUCT TO CART
  //passing shopifyId
  const addProductToCart = async variantId => {
    try {
      //creating lineItems
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      //adding items to checkout via id
      const addItems = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      console.log(addItems.webUrl)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
