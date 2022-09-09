import style from '../../stylesheets/economy/Bank.module.css'
import { itemImages } from "../../images"

// if a quantity is 1,000,000 or more, it should display as 1M for example
// function quantityTranslator() {

// }

export function BankItem(props) {

  return (
    <div className={style.bankItem}>
      <button className={style.bankItemBtn} onClick={() => {props.setSelectedItem(props.itemName)}}>
        <img className={style.bankItemImg} src={itemImages[props.itemName]}></img>
        <div className={style.bankQuantity}>{props.quantity.toLocaleString()}</div>
      </button>
    </div>
  )
}