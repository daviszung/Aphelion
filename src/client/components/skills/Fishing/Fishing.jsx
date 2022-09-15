import style from '../../../stylesheets/skills/Fishing.module.css'
import { expTable } from '../../../tables.js'
import { FishingArea } from './FishingArea'
import { useState } from 'react'

const fishingRodType = {
  0: 'BRONZE FISHING ROD',
  5: 'IRON FISHING ROD',
  10: 'STEEL FISHING ROD',
  20: 'MITHRIL FISHING ROD',
  30: 'ADAMANT FISHING ROD',
  40: 'RUNE FISHING ROD',
  50: 'DRAGON FISHING ROD',
}

export function Fishing({state, selectedAction, setSelectedAction}) {
  const [fishingAction, setFishingAction] = useState(null);

  return (
    <div className={style.fishingSkillContainer}>
      <div className={style.skillInfoContainer}>
        <div className={style.innerInfoContainer}>
          <span>SKILL XP <span className={style.expColor}>{state ? state.levels.fishing.exp.toLocaleString() : null} / {state ? expTable[state.levels.fishing.level + 1].toLocaleString() : null}</span></span>
          <div className={style.flexAlign}><div style={{marginRight: '10px'}}>CURRENT ROD</div><div className={style.axeType}>{fishingRodType[state.modifiers.pickaxe]}</div></div>
        </div>
        <div className={style.expBar}><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${state ? ((state.levels.fishing.exp - expTable[state.levels.fishing.level]) / (expTable[state.levels.fishing.level + 1] - expTable[state.levels.fishing.level])) * 100 : 0}%`}}></div></div>
      </div>
      {/* <button id={style['saltyShore']} className={`${style.shadowedContainer} ${style.fishingAreaContainer}`} onClick={() => {
        if (selectedAction === 'Rune Essence') {
          setSelectedAction(null)
        } else {setSelectedAction('Rune Essence')}}}>
        <div>Rune Essence</div>
        <div>5xp / {(3 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.fishImages} src='https://cdn.melvor.net/core/v018/assets/media/bank/rune_essence.png'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Rune Essence' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button> */}
      <FishingArea id={style['saltyShore']} areaName='Salty Shore' fishTypes={['Raw Shrimp', 'Raw Lobster', 'Raw Crab']}></FishingArea>
      <FishingArea id={style['rustyRiver']} areaName='Rusty River' fishTypes={['Raw Sardine', 'Raw Herring', 'Raw Carp']}></FishingArea>
      <FishingArea id={style['toxicTrench']} areaName='Toxic Trench' fishTypes={['Raw Blowfish', 'Raw Poison Fish', 'Raw Anglerfish', 'Raw Cave Fish']}></FishingArea>
      <FishingArea id={style['lavishLake']} areaName='Lavish Lake' fishTypes={['Raw Trout', 'Raw Salmon', 'Raw Fanfish']}></FishingArea>
      <FishingArea id={style['starlightSea']} areaName='Starlight Sea' locked={true}></FishingArea>
      <FishingArea id={style['starlightSea']} areaName='Salty Shore' locked={true}></FishingArea>
    </div>
  )
}