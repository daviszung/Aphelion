import { BankItem } from './BankItem'
import { BankTabsContainer } from './BankTabsContainer';
import { BankInfo } from './BankInfo';

export function Bank(props) {
  const myArr = [];

  function loadItems () {
    const bank = props.state.userObj.bank;
    
    
    for (let i in bank) {
      myArr.push(<BankItem key={i} quantity={bank[i]} itemName={i}/>)
    }
    return myArr;
  }

  

  return (
    <div id="bankContainer">
      <div id="bankMain" className="bankArea">
        <BankInfo state={props.state}/>
        <BankTabsContainer state={props.state}/>
        <div id="storage">{loadItems()}</div>
      </div>
      <div id="bankSecondary" className="bankArea">
        <div></div>

      </div>
      <div id="keyItemsContainer" className="bankArea">

      </div>
    </div> 
  )
}