import style from '../../stylesheets/economy/Bank.module.css'
import { itemGoldValues } from '../../tables.js'

function calculateBankGold(bank) {
  let total = 0;
  if (!bank) return total;
  for (let i in bank) {
    total += itemGoldValues[i] * bank[i]
  }
  return total.toLocaleString();
}


export function BankInfo(props) {

  return (
    <div className={style.bankInfo}>
      <div className={style.bankInfoFlex}>Space: {props.state.bankSpace}/{props.state.maxBankSpace}</div>
      <div className={style.bankInfoFlex}><img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src='https://cdn.melvor.net/core/v018/assets/media/main/coins.svg'></img><div>{calculateBankGold(props.state.bank)}</div></div>
    </div>
  )
}