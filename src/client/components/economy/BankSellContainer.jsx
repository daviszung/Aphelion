import { itemGoldValues } from "../../tables"
import { useState } from 'react'

export function BankSellContainer(props) {
  const [sellAmount, setSellAmount] = useState(1)

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
        <div></div>
        <div></div>
      </div>
    </div>
  )
}