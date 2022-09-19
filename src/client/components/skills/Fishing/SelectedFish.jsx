import style from '../../../stylesheets/skills/Fishing.module.css'
import { fishDict, actionTimeValues, actionExpValues } from '../../../tables'

export function SelectedFish({ state, selectedFish, selectedAction, setSelectedAction}) {
  if (selectedFish) {
    return (
      <div className={style.rightBody}>
        <button className={style.fishActionBtn}>
          <div className={style.selectedFishHeader}>{selectedFish}</div>
          <img className={style.selectedFishImg} src={fishDict[selectedFish].img}></img>
          <div className={style.fishInfo}>
            <div>{actionExpValues[selectedFish]}xp / {((actionTimeValues[selectedFish] / 1000) * (100 - state.modifiers.fishingRod) / 100).toFixed(2)}s</div>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBar} style={selectedAction === 'Raw Shrimp' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
          </div>
        </button>
      </div>
    )
  } else {
    return (
      <div className={style.noFishSelected}>No Fish Selected</div>
    )
  }
}

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