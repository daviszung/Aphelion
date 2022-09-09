import style from '../../stylesheets/economy/Shop.module.css'
import { ShopGeneralUpgrades } from './ShopGeneralUpgrades'
import { ShopSkillUpgrades } from './ShopSkillUpgrades';
import { ShopSkillcapes } from './ShopSkillcapes'
import { ShopMaterialsAndItems } from './ShopMaterialsAndItems'

export function ShopSectionContainer(props) {
  function renderCategory(selected){
    switch(selected){
      case "generalUpgrades":
        return <ShopGeneralUpgrades />;
      case "skillUpgrades":
        return <ShopSkillUpgrades />;
      case "skillcapes":
        return <ShopSkillcapes />;
      case "materialsAndItems":
        return <ShopMaterialsAndItems />;
      default:
        throw new Error()
    }
  }

  return (
    <div className={`${style.shadowedContainer} ${style.shopSectionContainer}`}>
      {renderCategory(props.selectedCategory)}
    </div>
  )
}