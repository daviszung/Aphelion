import { itemGoldValues } from "../../tables"
import { useState } from 'react'

export function BankSellContainer(props) {
  const [sellAmount, setSellAmount] = useState(100)

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
        <div className="sellQuantityBoxContainer">
          <div className="sellQuantityBox">1</div>
          <div className="sellQuantityBox">{props.quantity.toLocaleString()}</div>
        </div>
        <div className="sellItemFlex2">
          <input className="rangeSlider" type='range'></input>
        </div>
        <div className="sellItemFlex3">
          <input></input>
          <div>
            <button>All but 1</button>
            <button>All</button>
          </div>
          <button id="sellBtn" onClick={sellItem}>Sell Item</button>
        </div>
        <div className="sellValueContainer"><img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img><div>{(sellAmount * itemGoldValues[props.selectedItem]).toLocaleString()}</div></div>
      </div>
    </div>
  )
}