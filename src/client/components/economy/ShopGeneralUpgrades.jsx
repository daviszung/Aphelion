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
    <div className="hw100">
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className="shopSectionTitle">
        <img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img>
        <div>GENERAL UPGRADES</div>
      </div>
      <div className="shopGrid">
        <button className="purchaseContainer" onClick={() => {
          if (state.gold >= bankSlotCosts[state.maxBankSpace - 12]) {
            setSelectedModal('extraBankSlot')
            setModalCost(bankSlotCosts[state.maxBankSpace - 12])
            document.querySelector(".modal").classList.toggle("show-modal")
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className="flexAlign">
            <strong>Extra Bank Slot</strong>
            <div className="flexAlign">
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{bankSlotCosts[state.maxBankSpace - 12]}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className="flexCenter">
              <img className="purchaseImg" src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img>
            </div>
            <div className="purchaseDescription">+1 Bank Slot</div>
          </div>          
        </button>
      </div>
    </div>
  )
}