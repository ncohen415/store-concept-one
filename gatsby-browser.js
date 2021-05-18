import React from "react"

//context
import { StoreProvider } from "./src/context/StoreContext"

export const wrapRootElement = ({ element }) => {
  return <StoreProvider>{element}</StoreProvider>
}
