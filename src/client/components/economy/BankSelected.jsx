import style from '../../stylesheets/economy/Bank.module.css'
import { itemImages } from "../../images"
import { BankSellContainer } from "./BankSellContainer"

export function BankSelected (props) {

  if (props.selectedItem === null) {
    return (
      <div id={style['bankSelected']}>
        <div id={style['bankSelectedNone']}>No item selected.</div>
      </div>
    )
  } else {

    // needs an area to equip items as well
    return (
      <div id={style['bankSelected']}>
        <div className={style.bankSecondaryImgContainer}><img className={style.bankSecondaryImg} src={itemImages[props.selectedItem]}></img><div className={style.selectedItemQuantity}>{props.quantity.toLocaleString()}</div></div>
        <div className={style.itemDescriptionContainer}>{props.selectedItem}</div>
        <BankSellContainer selectedItem={props.selectedItem} setSelectedItem={props.setSelectedItem} quantity={props.quantity} state={props.state} />
      </div>
    )
  }
}