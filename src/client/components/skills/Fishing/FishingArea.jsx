import style from '../../../stylesheets/skills/Fishing.module.css'
import { Fish } from './Fish'
import { SelectedFish } from './SelectedFish'
import { useState } from 'react'

export function FishingArea ({locked, fishingAction, setFishingAction}) {
  const [selectedFish, setSelectedFish] = useState(null)
  if (locked) {
    return (
      <div className={`${style.shadowedContainer} ${style.lockedAreaContainer}`}>
        <div className={style.lockedFishingArea}>
          <div className={style.lock}>
            <img className={style.lockImg} src='https://www.freeiconspng.com/uploads/lock-icon-11.png'></img>
          </div>
          <div className={style.lockedText}>Locked: Find An Item To Unlock This Area</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${style.shadowedContainer} ${style.fishingAreaContainer}`}>
        <div className={style.fishingAreaHeader}>
          <div className={style.fishingAreaTitle}>Area Title</div>
          <div className={style.fishingAreaStats}>
            <span>Fish: 80%</span>
            <span>Junk: 20%</span>
            <span>Special: 0%</span>
          </div>
        </div>
        <div className={style.fishingAreaBody}>
          <div className={style.leftBody}>
            <Fish></Fish>
            <Fish></Fish>
            <Fish></Fish>
          </div>
          <SelectedFish selected={selectedFish}></SelectedFish>
        </div>
      </div>
    )
  }
}