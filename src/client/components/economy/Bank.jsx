import style from '../../stylesheets/economy/Bank.module.css'
import { BankItem } from './BankItem'
import { BankTabsContainer } from './BankTabsContainer';
import { BankInfo } from './BankInfo';
import { BankSelected } from './BankSelected';
import { useState } from 'react';

export function Bank(props) {
  const myArr = [];
  const [selectedItem, setSelectedItem] = useState(null)

  function loadItems () {
    const bank = props.state.bank;
    for (let i in bank) {
      myArr.push(<BankItem key={i} quantity={bank[i]} itemName={i} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>)
    }
    return myArr;
  }

  return (
    <div className={style.bankContainer}>
      <div className={`${style.shadowedContainer} ${style.bankMain}`}>
        <div className={style.bankMainControls}>
          <BankInfo state={props.state}/>
          <BankTabsContainer state={props.state}/>
        </div>
        <div className={style.storage}>{loadItems()}</div>
      </div>
      <div className={`${style.shadowedContainer} ${style.bankSecondary}`}>
        <div className={style.bankSecondaryControls}></div>
        <BankSelected selectedItem={selectedItem} setSelectedItem={setSelectedItem} quantity={props.state.bank[selectedItem]} state={props.state}/>
      </div>
      <div className={`${style.shadowedContainer} ${style.keyItemsContainer}`}>

      </div>
    </div> 
  )
}