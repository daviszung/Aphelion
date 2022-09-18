import style from '../../../stylesheets/skills/Fishing.module.css'
import { fishDict, actionTimeValues, actionExpValues } from '../../../tables'

export function SelectedFish({ state, selectedFish, selectedAction, setSelectedAction}) {
  if (selectedFish) {
    return (
      <div className={style.rightBody}>
        <div className={style.selectedFishHeader}><img className={style.selectedFishImg} src={fishDict[selectedFish].img}></img>{selectedFish}</div>
        <div className={style.fishInfo}>
          <div>{actionExpValues[selectedFish]}xp / {((actionTimeValues[selectedFish] / 1000) * (100 - state.modifiers.axe) / 100).toFixed(2)}s</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={style.noFishSelected}>No Fish Selected</div>
    )
  }
}