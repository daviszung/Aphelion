import style from '../../../stylesheets/skills/Fishing.module.css'
import { Fish } from './Fish'
import { SelectedFish } from './SelectedFish'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserObject } from '../../../redux/userSlice'

// dictionary of fish levels needed
const fishDict = {
  "Raw Shrimp": {
    level: 0,
    img: 'https://cdn.melvor.net/core/v018/assets/media/bank/shrimp.png'
  },
  "Raw Sardine": {
    level: 5
  },
  "Raw Blowfish": {
    level: 8
  },
  "Raw Herring": {
    level: 10
  },
  "Raw Trout": {
    level: 20
  },
  "Raw Poison Fish": {
    level: 30
  },
  "Raw Salmon": {
    level: 35
  },
  "Raw Lobster": {
    level: 40
  },
  "Raw Swordfish": {
    level: 50
  },
  "Raw Anglerfish": {
    level: 50
  },
  "Raw Fanfish": {
    level: 55
  },
  "Raw Crab": {
    level: 60
  },
  "Raw Carp": {
    level: 65
  },
  "Raw Shark": {
    level: 70
  },
  "Raw Cave Fish": {
    level: 75
  },
  "Raw Manta Ray": {
    level: 85
  },
  "Raw Whale": {
    level: 95
  },
}


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
          <SelectedFish selectedFish={selectedFish} selectedAction={selectedAction} setSelectedAction={setSelectedAction} ></SelectedFish>
        </div>
      </div>
    )
  }
}