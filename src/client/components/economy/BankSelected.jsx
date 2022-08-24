import { itemImages } from "../../images"

export function BankSelected (props) {

  if (props.selectedItem === null) {
    return (
      <div id="bankSelected">
        <div id="bankSelectedNone">No item selected.</div>
      </div>
    )
  } else {

    // needs an area to equip items as well
    return (
      <div id="bankSelected">
        <div className="bankSecondaryImgContainer"><img className="bankSecondaryImg" src={itemImages[props.selectedItem]}></img><div className="selectedItemQuantity">{props.quantity.toLocaleString()}</div></div>
        <div className="itemDescriptionContainer">{props.selectedItem}</div>
        <div className="sellItemContainer"></div>
      </div>
    )
  }
}