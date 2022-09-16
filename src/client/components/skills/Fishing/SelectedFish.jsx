import style from '../../../stylesheets/skills/Fishing.module.css'

export function SelectedFish({ selectedFish, selectedAction, setSelectedAction}) {
  if (selectedFish) {
    return (
      <div className={style.rightBody}>{selectedFish}</div>
    )
  } else {
    return (
      <div className={style.noFishSelected}>No Fish Selected</div>
    )
  }
  
}