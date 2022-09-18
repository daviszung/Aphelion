import style from '../../../stylesheets/skills/Fishing.module.css'
import { Fish } from './Fish'
import { SelectedFish } from './SelectedFish'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserObject } from '../../../redux/userSlice'
import { fishDict } from '../../../tables'


export function FishingArea ({ areaName, locked, fishTypes, selectedAction, setSelectedAction, chanceFish, chanceJunk, chanceSpecial}) {
  const state = useSelector(selectUserObject)
  const [selectedFish, setSelectedFish] = useState(null)

  function generateFish() {
    return fishTypes.map((fish, index) => <Fish key={index} fish={fish} img={fishDict[fish].img} setSelectedFish={setSelectedFish} unlocked={state.levels.fishing.level >= fishDict[fish].level} level={fishDict[fish].level}></Fish>)
  }

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
          <div className={style.fishingAreaTitle}>{areaName}</div>
          <div className={style.fishingAreaStats}>
            <span>Fish: {chanceFish}%</span>
            <span>Junk: {chanceJunk}%</span>
            <span>Special: {chanceSpecial}%</span>
          </div>
        </div>
        <div className={style.fishingAreaBody}>
          <div className={style.leftBody}>
            {generateFish(fishTypes, state)}
          </div>
          <SelectedFish state={state} selectedFish={selectedFish} selectedAction={selectedAction} setSelectedAction={setSelectedAction} ></SelectedFish>
        </div>
      </div>
    )
  }
}