import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'
import { Modal } from './Modal'
import { useState } from 'react'


export function ShopSkillcapes() {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()

  const [selectedModal, setSelectedModal] = useState('extraBankSlot')
  const [modalCost, setModalCost] = useState(10000000)

  return (
    <div className="hw100">
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className="shopSectionTitle">
        <img className="shopCategoryImg" src="https://cdn.melvor.net/core/v018/assets/media/bank/skillcape_woodcutting.png"></img>
        <div>SKILLCAPES</div>
      </div>
      <div className="shopGrid">
        
      </div>
    </div>
  )
}