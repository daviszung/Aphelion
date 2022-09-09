import style from '../../stylesheets/economy/Bank.module.css'
import { itemGoldValues } from "../../tables"
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { sellItem } from "../../redux/userSlice";

export function BankSellContainer(props) {
  const [sellAmount, setSellAmount] = useState(1)
  const dispatch = useDispatch()

  return (
    <div className={style.sellItemContainer}>
      <div className={style.sellItemFlex1}>
        <strong>Sell Item</strong>
        <div>Sells for: {itemGoldValues[props.selectedItem]} GP each</div>
      </div>
      <div className={style.sellItemControls}>
        <div className={style.sellItemFlex2}>
          <input className={style.sellTextInput} type="number" min="0" max={props.quantity} onChange={() => {
            let val = document.querySelector('.sellTextInput').value;
            if (val > props.quantity) {
              val = props.quantity
            }
            setSellAmount(val)}}></input>
          <div className={style.sellAllBtnContainer}>
            <button className={style.blueBtn} onClick={() => {setSellAmount(props.quantity - 1)}}>All but 1</button>
            <button className={style.blueBtn} onClick={() => {setSellAmount(props.quantity)}}>All</button>
          </div>
          <button id={style['sellBtn']} onClick={() => {
            dispatch(sellItem({sellAmount: sellAmount, selectedItem: props.selectedItem}))
            if (sellAmount >= props.state.bank[props.selectedItem]) {
              props.setSelectedItem(null)
            }
          }}>Sell Item</button>
        </div>
        <div className={style.sellValueContainer}><div>Sell Amount: {sellAmount}</div><div className={style.flexCenter}><img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img><div>{(sellAmount * itemGoldValues[props.selectedItem]).toLocaleString()}</div></div></div>
      </div>
    </div>
  )
}