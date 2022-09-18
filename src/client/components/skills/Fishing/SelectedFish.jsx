import style from '../../../stylesheets/skills/Fishing.module.css'
import { fishDict } from './FishingArea'

export function SelectedFish({ selectedFish, selectedAction, setSelectedAction}) {
  if (selectedFish) {
    return (
      <div className={style.rightBody}>
        <div><img className={style.fishImg} src={fishDict[selectedFish].img}></img>{selectedFish}</div>
      </div>
    )
  } else {
    return (
      <div className={style.noFishSelected}>No Fish Selected</div>
    )
  }
}