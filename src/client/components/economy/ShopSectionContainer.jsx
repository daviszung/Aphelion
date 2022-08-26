import { ShopGeneralUpgrades } from './ShopGeneralUpgrades'
import { ShopSkillUpgrades } from './ShopSkillUpgrades';
import { ShopSkillcapes } from './ShopSkillcapes'
import { ShopMaterialsAndItems } from './ShopMaterialsAndItems'

export function ShopSectionContainer(props) {
  function renderCategory(selected){
    switch(selected){
      case "generalUpgrades":
        return <ShopGeneralUpgrades state={props.state} dispatch={props.dispatch}/>;
      case "skillUpgrades":
        return <ShopSkillUpgrades state={props.state} dispatch={props.dispatch}/>;
      case "skillcapes":
        return <ShopSkillcapes state={props.state} dispatch={props.dispatch}/>;
      case "materialsAndItems":
        return <ShopMaterialsAndItems state={props.state} dispatch={props.dispatch}/>;
      default:
        throw new Error()
    }
  }

  return (
    <div className="shadowedContainer shopSectionContainer">
      {renderCategory(props.selectedCategory)}
    </div>
  )
}