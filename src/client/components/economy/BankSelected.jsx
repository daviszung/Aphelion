import { itemImages } from "../../images"

export function BankSelected (props) {

  if (props.selectedItem === null) {
    return (
      <div id="bankSelected">
        <div id="bankSelectedNone">No item selected.</div>
      </div>
    )
  } else {
    return (
      <div id="bankSelected">
        <div>
          <div><img className="bankSecondaryImg" src={itemImages[props.selectedItem]}></img></div>
          <div>{props.selectedItem}</div>
        </div>
        <div></div>
      </div>
    )
  }
}