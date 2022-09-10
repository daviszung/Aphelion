import style from '../../stylesheets/economy/Shop.module.css'

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

const pickaxes = {
  0: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_iron.svg',
    cost: 250,
    name: 'Iron Pickaxe'
  },
  5: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_steel.svg',
    cost: 2000,
    name: 'Steel Pickaxe'
  },
  10: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_mithril.svg',
    cost: 50000,
    name: 'Mithril Pickaxe'
  },
  20: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_adamant.svg',
    cost: 200000,
    name: 'Adamant Pickaxe'
  },
  30: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_rune.svg',
    cost: 1000000,
    name: 'Rune Pickaxe'
  },
  40: {
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_dragon.svg',
    cost: 5000000,
    name: 'Dragon Pickaxe'
  }
}

const fishingRods = {
  0: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_iron.svg',
    cost: 100,
    name: 'Iron Fishing Rod'
  },
  5: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_steel.svg',
    cost: 1000,
    name: 'Steel Fishing Rod'
  },
  10: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_mithril.svg',
    cost: 20000,
    name: 'Mithril Fishing Rod'
  },
  20: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_adamant.svg',
    cost: 75000,
    name: 'Adamant Fishing Rod'
  },
  30: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_rune.svg',
    cost: 300000,
    name: 'Rune Fishing Rod'
  },
  40: {
    img: 'https://melvoridle.com/assets/media/shop/fishing_dragon.svg',
    cost: 2000000,
    name: 'Dragon Fishing Rod'
  }
}


export function ShopSkillUpgrades() {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()
  const [selectedModal, setSelectedModal] = useState('extraBankSlot')
  const [modalCost, setModalCost] = useState(10000000)


  return (
    <div className={style.hw100}>
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className={style.shopSectionTitle}>
        <img className={style.shopCategoryImg} src="https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/woodcutting.svg"></img>
        <div>SKILL UPGRADES</div>
      </div>
      <div className={style.shopGrid}>
        <button className={style.purchaseContainer} style={{display: `${pickaxes[state.modifiers.axe] !== undefined && state.modifiers.axe < 50 ? 'flex' : 'none'}`}} onClick={() => {
          if (state.gold >= axes[state.modifiers.axe].cost) {
            setSelectedModal(axes[state.modifiers.axe].name)
            setModalCost(axes[state.modifiers.axe].cost)
            document.querySelector("#modal").classList.toggle(style.showModal)
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className={style.flexAlign}>
            <strong>Axe Upgrade</strong>
            <div className={style.flexAlign}>
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{axes[state.modifiers.axe] ? axes[state.modifiers.axe].cost.toLocaleString() : 'none'}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className={style.flexCenter}>
              <img className={style.purchaseImg} src={axes[state.modifiers.axe] ? axes[state.modifiers.axe].img : ''}></img>
            </div>
            <div className={style.purchaseDescription}>Cut Trees Faster</div>
          </div>          
        </button>
        <button className={style.purchaseContainer} style={{display: `${pickaxes[state.modifiers.pickaxe] !== undefined && state.modifiers.pickaxe < 50 ? 'flex' : 'none'}`}} onClick={() => {
          if (state.gold >= pickaxes[state.modifiers.pickaxe].cost) {
            setSelectedModal(pickaxes[state.modifiers.pickaxe].name)
            setModalCost(pickaxes[state.modifiers.pickaxe].cost)
            document.querySelector("#modal").classList.toggle(style.showModal)
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className={style.flexAlign}>
            <strong>Pickaxe Upgrade</strong>
            <div className={style.flexAlign}>
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{pickaxes[state.modifiers.pickaxe] ? pickaxes[state.modifiers.pickaxe].cost.toLocaleString() : 'none'}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className={style.flexCenter}>
              <img className={style.purchaseImg} src={pickaxes[state.modifiers.pickaxe] ? pickaxes[state.modifiers.pickaxe].img : ''}></img>
            </div>
            <div className={style.purchaseDescription}>Mine Ore Faster</div>
          </div>
        </button>
        <button className={style.purchaseContainer} style={{display: `${fishingRods[state.modifiers.fishingRod] !== undefined && state.modifiers.fishingRod < 50 ? 'flex' : 'none'}`}} onClick={() => {
          if (state.gold >= fishingRods[state.modifiers.fishingRod].cost) {
            setSelectedModal(fishingRods[state.modifiers.fishingRod].name)
            setModalCost(fishingRods[state.modifiers.fishingRod].cost)
            document.querySelector("#modal").classList.toggle(style.showModal)
          }
          }}>
          <div style={{width: '100%', justifyContent: 'space-between'}} className={style.flexAlign}>
            <strong>Fishing Rod Upgrade</strong>
            <div className={style.flexAlign}>
              <img style={{height: '15px', width: '15px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div>{fishingRods[state.modifiers.fishingRod] ? fishingRods[state.modifiers.fishingRod].cost.toLocaleString() : 'none'}</div>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '10px'}}>
            <div className={style.flexCenter}>
              <img className={style.purchaseImg} src={fishingRods[state.modifiers.fishingRod] ? fishingRods[state.modifiers.fishingRod].img : ''}></img>
            </div>
            <div className={style.purchaseDescription}>Fish Faster</div>
          </div>
        </button>
      </div>
    </div>
  )
}

