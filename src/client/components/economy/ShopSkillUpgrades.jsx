import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'
import { Modal } from './Modal'
import { useState } from 'react'

const axes = {
  0: {
    img: 'https://melvoridle.com/assets/media/shop/axe_iron.svg',
    cost: 50,
    name: 'Iron Axe'
  },
  5: {
    img: 'https://melvoridle.com/assets/media/shop/axe_steel.svg',
    cost: 750,
    name: 'Steel Axe'
  },
  10: {
    img: 'https://melvoridle.com/assets/media/shop/axe_mithril.svg',
    cost: 10000,
    name: 'Mithril Axe'
  },
  20: {
    img: 'https://melvoridle.com/assets/media/shop/axe_adamant.svg',
    cost: 50000,
    name: 'Adamant Axe'
  },
  30: {
    img: 'https://melvoridle.com/assets/media/shop/axe_rune.svg',
    cost: 200000,
    name: 'Rune Axe'
  },
  40: {
    img: 'https://melvoridle.com/assets/media/shop/axe_dragon.svg',
    cost: 2000000,
    name: 'Dragon Axe'
  },
}

export function ShopSkillUpgrades(props) {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()
  const [selectedModal, setSelectedModal] = useState('extraBankSlot')
  const [modalCost, setModalCost] = useState(10000000)


  return (
    <div className="hw100">
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className="shopSectionTitle">
        <img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg"></img>
        <div>SKILL UPGRADES</div>
      </div>
      <div className="shopGrid">
        <button className="purchaseContainer" style={{display: `${axes[state.modifiers.axe] !== undefined && state.modifiers.axe < 50 ? 'flex' : 'none'}`}} onClick={() => {
          if (state.gold >= axes[state.modifiers.axe].cost) {
            setSelectedModal(axes[state.modifiers.axe].name)
            setModalCost(axes[state.modifiers.axe].cost)
            document.querySelector(".modal").classList.toggle("show-modal")
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className="flexAlign">
            <strong>Axe Upgrade</strong>
            <div className="flexAlign">
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{axes[state.modifiers.axe] ? axes[state.modifiers.axe].cost.toLocaleString() : 'none'}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className="flexCenter">
              <img className="purchaseImg" src={axes[state.modifiers.axe] ? axes[state.modifiers.axe].img : ''}></img>
            </div>
            <div className="purchaseDescription">Cut Trees Faster</div>
          </div>          
        </button>
      </div>
    </div>
  )
}

