import { ShopSectionContainer } from "./ShopSectionContainer"
import { useState } from "react"

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("generalUpgrades")

  return (
    <div id="shop">
      <div className="shopCategorySelector flexCenter shadowedContainer">
        <div className="shopCategorySelectorInner">
          <button onClick={() => {setSelectedCategory("generalUpgrades")}} className="shopCategoryBtn flexCenter"><img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img><div>General Upgrades</div></button>
          <button onClick={() => {setSelectedCategory("skillUpgrades")}} className="shopCategoryBtn flexCenter"><img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg"></img><div>Skill Upgrades</div></button>
          <button onClick={() => {setSelectedCategory("skillcapes")}} className="shopCategoryBtn flexCenter"><img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/bank/skillcape_woodcutting.png"></img><div>Skillcapes</div></button>
          <button onClick={() => {setSelectedCategory("materialsAndItems")}} className="shopCategoryBtn flexCenter"><img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/bank/leather.png"></img><div>Materials & Items</div></button>
        </div>
      </div>
      <ShopSectionContainer selectedCategory={selectedCategory}/>
    </div>
  )
}