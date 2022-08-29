import { itemGoldValues } from '../../tables.jsx'

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
    <div id="bankInfo">
      <div className='bankInfoFlex'>Space: {props.state.userObj.bankSpace}/{props.state.userObj.maxBankSpace}</div>
      <div className='bankInfoFlex'><img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src='https://cdn.melvor.net/core/v018/assets/media/main/coins.svg'></img><div>{calculateBankGold(props.state.userObj.bank)}</div></div>
    </div>
  )
}