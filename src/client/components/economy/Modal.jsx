import style from '../../stylesheets/economy/Shop.module.css'
import { buyExtraBankSlot, buyAxeUpgrade, buyPickaxeUpgrade, buyFishingRodUpgrade } from '../../redux/userSlice'

const modals = {
  extraBankSlot: {
    question: 'Buy 1x Extra Bank Slot?',
    description: '+1 Maximum Bank Space',
    purchase: buyExtraBankSlot,
    img: 'https://cdn.melvor.net/core/v018/assets/media/main/bank_header.svg'
  },
  "Iron Axe": {
    question: 'Buy An Iron Axe?',
    description: 'Reduce Time to Cut Trees by 5%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_iron.svg'
  },
  "Steel Axe": {
    question: 'Buy A Steel Axe?',
    description: 'Reduce Time to Cut Trees by 10%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_steel.svg'
  },
  "Mithril Axe": {
    question: 'Buy A Mithril Axe?',
    description: 'Reduce Time to Cut Trees by 10%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_mithril.svg'
  },
  "Adamant Axe": {
    question: 'Buy An Adamant Axe?',
    description: 'Reduce Time to Cut Trees by 10%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_adamant.svg'
  },
  "Rune Axe": {
    question: 'Buy A Rune Axe?',
    description: 'Reduce Time to Cut Trees by 10%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_rune.svg'
  },
  "Dragon Axe": {
    question: 'Buy A Dragon Axe?',
    description: 'Reduce Time to Cut Trees by 10%',
    purchase: buyAxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/axe_dragon.svg'
  },
  "Iron Pickaxe": {
    question: 'Buy An Iron Pickaxe?',
    description: 'Reduce Time to Mine Ore by 5%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_iron.svg'
  },
  "Steel Pickaxe": {
    question: 'Buy A Steel Pickaxe?',
    description: 'Reduce Time to Mine Ore by 10%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_steel.svg'
  },
  "Mithril Pickaxe": {
    question: 'Buy A Mithril Pickaxe?',
    description: 'Reduce Time to Mine Ore by 10%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_mithril.svg'
  },
  "Adamant Pickaxe": {
    question: 'Buy An Adamant Pickaxe?',
    description: 'Reduce Time to Mine Ore by 10%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_adamant.svg'
  },
  "Rune Pickaxe": {
    question: 'Buy A Rune Pickaxe?',
    description: 'Reduce Time to Mine Ore by 10%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_rune.svg'
  },
  "Dragon Pickaxe": {
    question: 'Buy A Dragon Pickaxe?',
    description: 'Reduce Time to Mine Ore by 10%',
    purchase: buyPickaxeUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/pickaxe_dragon.svg'
  },
  "Iron Fishing Rod": {
    question: 'Buy An Iron Fishing Rod?',
    description: 'Reduce Time to Fish by 5%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_iron.svg'
  },
  "Steel Fishing Rod": {
    question: 'Buy A Steel Fishing Rod?',
    description: 'Reduce Time to Fish by 10%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_steel.svg'
  },
  "Mithril Fishing Rod": {
    question: 'Buy A Mithril Fishing Rod?',
    description: 'Reduce Time to Fish by 10%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_mithril.svg'
  },
  "Adamant Fishing Rod": {
    question: 'Buy An Adamant Fishing Rod?',
    description: 'Reduce Time to Fish by 10%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_adamant.svg'
  },
  "Rune Fishing Rod": {
    question: 'Buy A Rune Fishing Rod?',
    description: 'Reduce Time to Fish by 10%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_rune.svg'
  },
  "Dragon Fishing Rod": {
    question: 'Buy A Dragon Fishing Rod?',
    description: 'Reduce Time to Fish by 10%',
    purchase: buyFishingRodUpgrade,
    img: 'https://melvoridle.com/assets/media/shop/fishing_dragon.svg'
  },
}

export function Modal (props) {
  return (
    <div id="modal" className={style.modal}>
        <div className={style.modalContent}>
          <img className={style.modalImg} src={`${modals[props.selectedModal].img}`}></img>
          <h1>{modals[props.selectedModal].question}</h1>
          <div>{modals[props.selectedModal].description}</div>
          <div className={style.flexAlign}>
              <img style={{height: '32px', width: '32px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div style={{fontSize: '1.1rem'}}>{props.cost.toLocaleString()}</div>
          </div>
          <div className={`${style.flexAlign} ${style.modalBtnContainer}`}>
            <button className={style.buyBtn} onClick={() => {
              props.dispatch(modals[props.selectedModal].purchase(props.cost))
              document.querySelector("#modal").classList.toggle(style.showModal)}
              }>Buy</button>
            <button className={style.cancelBtn} onClick={() => {document.querySelector("#modal").classList.toggle(style.showModal)}}>Cancel</button>
          </div>
        </div>
      </div>
  )
}