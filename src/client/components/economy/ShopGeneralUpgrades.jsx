import style from '../../stylesheets/economy/Shop.module.css'
import { bankSlotCosts } from "../../tables"
import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'
import { useState } from "react"
import { Modal } from "./Modal"

export function ShopGeneralUpgrades() {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()
  const [selectedModal, setSelectedModal] = useState('extraBankSlot')
  const [modalCost, setModalCost] = useState(10000000)


  return (
    <div className={style.hw100}>
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className={style.shopSectionTitle}>
        <img className={style.shopCategoryImg} src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img>
        <div>GENERAL UPGRADES</div>
      </div>
      <div className={style.shopGrid}>
        <button className={style.purchaseContainer} onClick={() => {
          if (state.gold >= bankSlotCosts[state.maxBankSpace - 12]) {
            setSelectedModal('extraBankSlot')
            setModalCost(bankSlotCosts[state.maxBankSpace - 12])
            document.querySelector("#modal").classList.toggle(style.showModal)
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className={style.flexAlign}>
            <strong>Extra Bank Slot</strong>
            <div className={style.flexAlign}>
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{bankSlotCosts[state.maxBankSpace - 12]}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className={style.flexCenter}>
              <img className={style.purchaseImg} src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img>
            </div>
            <div className={style.purchaseDescription}>+1 Bank Slot</div>
          </div>          
        </button>
      </div>
    </div>
  )
}