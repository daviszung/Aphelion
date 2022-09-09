import style from '../../stylesheets/economy/Shop.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'
import { Modal } from './Modal'
import { useState } from 'react'

export function ShopMaterialsAndItems(props) {
  const state = useSelector(selectUserObject)
  const dispatch = useDispatch()

  const [selectedModal, setSelectedModal] = useState('extraBankSlot')
  const [modalCost, setModalCost] = useState(10000000)

  return (
    <div className={style.hw100}>
      <Modal selectedModal={selectedModal} dispatch={dispatch} cost={modalCost}/>
      <div className={style.shopSectionTitle}>
        <img className={style.shopCategoryImg} src="https://cdn.melvor.net/core/v018/assets/media/bank/leather.png"></img>
        <div>MATERIALS & ITEMS</div>
      </div>
      <div className={style.shopGrid}>
        
      </div>
    </div>
  )
}