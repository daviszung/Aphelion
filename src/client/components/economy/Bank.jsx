import { BankItem } from './BankItem'
import { BankTabsContainer } from './BankTabsContainer';
import { BankInfo } from './BankInfo';
import { BankSelected } from './BankSelected';
import { useState } from 'react';

export function Bank(props) {
  const myArr = [];
  const [selectedItem, setSelectedItem] = useState(null)

  function loadItems () {
    const bank = props.state.userObj.bank;
    for (let i in bank) {
      myArr.push(<BankItem key={i} quantity={bank[i]} itemName={i} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>)
    }
    return myArr;
  }

  return (
    <div id="bankContainer">
      <div id="bankMain" className="shadowedContainer">
        <div id="bankMainControls">
          <BankInfo state={props.state}/>
          <BankTabsContainer state={props.state}/>
        </div>
        <div id="storage">{loadItems()}</div>
      </div>
      <div id="bankSecondary" className="shadowedContainer">
        <div id='bankSecondaryControls'></div>
        <BankSelected selectedItem={selectedItem} setSelectedItem={setSelectedItem} quantity={props.state.userObj.bank[selectedItem]} state={props.state} dispatch={props.dispatch}/>
      </div>
      <div id="keyItemsContainer" className="shadowedContainer">

      </div>
    </div> 
  )
}