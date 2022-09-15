import style from '../../../stylesheets/skills/Fishing.module.css'

export function SelectedFish({selected}) {
  if (selected) {
    return (
      <div className={style.rightBody}></div>
    )
  } else {
    return (
      <div className={style.noFishSelected}>No Fish Selected</div>
    )
  }
  
}