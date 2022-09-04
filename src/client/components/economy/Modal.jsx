import { buyExtraBankSlot, buyAxeUpgrade } from '../../redux/userSlice'

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
}

export function Modal (props) {
  return (
    <div className="modal">
        <div className="modal-content">
          <img className="modalImg" src={`${modals[props.selectedModal].img}`}></img>
          <h1>{modals[props.selectedModal].question}</h1>
          <div>{modals[props.selectedModal].description}</div>
          <div className="flexAlign">
              <img style={{height: '32px', width: '32px', margin: '0 10px 0 0'}} src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg"></img>
              <div style={{fontSize: '1.1rem'}}>{props.cost}</div>
          </div>
          <div className="flexAlign modalBtnContainer">
            <button className="buyBtn" onClick={() => {
              props.dispatch(modals[props.selectedModal].purchase(props.cost))
              document.querySelector(".modal").classList.toggle("show-modal")}
              }>Buy</button>
            <button className="cancelBtn" onClick={() => {document.querySelector(".modal").classList.toggle("show-modal")}}>Cancel</button>
          </div>
        </div>
      </div>
  )
}