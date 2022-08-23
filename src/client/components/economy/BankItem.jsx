import { itemImages } from "../../images"

// if a quantity is 1,000,000 or more, it should display as 1M for example
// function quantityTranslator() {

// }

export function BankItem(props) {


  return (
    <div className="bankItem">
      <button className="bankItemBtn">
        <img className="bankItemImg" src={itemImages[props.itemName]}></img>
        <div className="bankQuantity">{props.quantity}</div>
      </button>
    </div>
  )
}