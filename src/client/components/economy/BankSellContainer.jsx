import { itemGoldValues } from "../../tables"
import { useState, useRef } from 'react'

export function BankSellContainer(props) {
  const [sellAmount, setSellAmount] = useState(1)

  function sellItem(){
    const copyObj = props.state.userObj;
    copyObj.gold += (sellAmount * itemGoldValues[props.selectedItem]);
    // if the amount being sold is >= the amount in bank, remove the item from bank
    if (sellAmount >= copyObj.bank[props.selectedItem]) {
      delete copyObj.bank[props.selectedItem];
      props.setSelectedItem(null)
      copyObj.bankSpace -= 1;
    } else {
      copyObj.bank[props.selectedItem] -= sellAmount;
    }
    props.dispatch({type: 'update', updatedObj: copyObj})
    return;
  }

  return (
    <div className="sellItemContainer">
      <div className="sellItemFlex1">
        <strong>Sell Item</strong>
        <div>Sells for: {itemGoldValues[props.selectedItem]} GP each</div>
      </div>
      <div className="sellItemControls">
        <div className="sellItemFlex2">
          <input className="sellTextInput" type="number" min="0" max={props.quantity} onChange={() => {
            let val = document.querySelector('.sellTextInput').value;
            if (val > props.quantity) {
              val = props.quantity
            }
            setSellAmount(val)}}></input>
          <div className="sellAllBtnContainer">
            <button className="blueBtn" onClick={() => {setSellAmount(props.quantity - 1)}}>All but 1</button>
            <button className="blueBtn" onClick={() => {setSellAmount(props.quantity)}}>All</button>
          </div>
          <button id="sellBtn" onClick={sellItem}>Sell Item</button>
        </div>
        <div className="sellValueContainer"><div>Sell Amount: {sellAmount}</div><div className="flexCenter"><img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img><div>{(sellAmount * itemGoldValues[props.selectedItem]).toLocaleString()}</div></div></div>
      </div>
    </div>
  )
}