import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'

const axes = {
  0: {
    img: 'https://melvoridle.com/assets/media/shop/axe_iron.svg',
    cost: 50
  },
  5: {
    img: 'https://melvoridle.com/assets/media/shop/axe_steel.svg',
    cost: 750
  },
  10: {
    img: 'https://melvoridle.com/assets/media/shop/axe_mithril.svg',
    cost: 10000
  },
  20: {
    img: 'https://melvoridle.com/assets/media/shop/axe_adamant.svg',
    cost: 50000
  },
  30: {
    img: 'https://melvoridle.com/assets/media/shop/axe_rune.svg',
    cost: 200000
  },
  40: {
    img: 'https://melvoridle.com/assets/media/shop/axe_dragon.svg',
    cost: 2000000
  },
}

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
              <div style={{fontSize: '1.1rem'}}>{}</div>
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
        <button className="purchaseContainer" style={{display: `${axes[state.modifiers.axe] !== undefined ? 'flex' : 'none'}`}} onClick={() => {
          if (state.gold >= axes[state.modifiers.axe].cost) {
            document.querySelector(".modal").classList.toggle("show-modal")
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className="flexAlign">
            <strong>Axe Upgrade</strong>
            <div className="flexAlign">
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{axes[state.modifiers.axe].cost}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className="flexCenter">
              <img className="purchaseImg" src={axes[state.modifiers.axe].img}></img>
            </div>
            <div className="purchaseDescription">Cut Trees Faster</div>
          </div>          
        </button>
      </div>
    </div>
  )
}

