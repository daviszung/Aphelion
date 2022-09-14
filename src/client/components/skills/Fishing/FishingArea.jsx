import style from '../../../stylesheets/skills/Fishing.module.css'

export function FishingArea ({locked}) {
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
  }
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
          <button className={style.fishSelector}></button>
          <button className={style.fishSelector}>Locked</button>
          <button className={style.fishSelector}></button>
        </div>
        <div className={style.rightBody}>{locked ? 'hi' : 'nah'}</div>
      </div>
    </div>
  )
}