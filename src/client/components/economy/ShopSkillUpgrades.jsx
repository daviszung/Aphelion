import { bankSlotCosts } from "../../tables"
import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject, buyExtraBankSlot } from '../../redux/userSlice'

export function ShopSkillUpgrades(props) {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()

  return (
    <div className="hw100">
      <div className="modal">
        <div className="modal-content">
          <img className="modalImg" src="https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg"></img>
          <h1>Buy 1x Extra Bank Slot?</h1>
          <div>+1 Maximum Bank Space</div>
          <div className="flexAlign">
              <img style={{height: '32px', width: '32px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div style={{fontSize: '1.1rem'}}>{bankSlotCosts[state.maxBankSpace - 12]}</div>
          </div>
          <div className="flexAlign modalBtnContainer">
            <button className="buyBtn" onClick={() => {
              dispatch(buyExtraBankSlot())
              document.querySelector(".modal").classList.toggle("show-modal")}
              }>Buy</button>
            <button className="cancelBtn" onClick={() => {document.querySelector(".modal").classList.toggle("show-modal")}}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="shopSectionTitle">
        <img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg"></img>
        <div>SKILL UPGRADES</div>
      </div>
      <div className="shopGrid">
        <button className="purchaseContainer" onClick={() => {
          if (state.gold >= bankSlotCosts[state.maxBankSpace - 12]) {
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

