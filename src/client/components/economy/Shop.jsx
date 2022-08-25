import { ShopSectionContainer } from "./ShopSectionContainer"
import { useState } from "react"

export function Shop(props) {
  const [selectedCategory, setSelectedCategory] = useState()

  return (
    <div>
      <div>You have x resources</div>
      <div>Category selection</div>
      <ShopSectionContainer />
    </div>
  )
}