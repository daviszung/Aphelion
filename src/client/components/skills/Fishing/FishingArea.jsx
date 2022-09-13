import style from '../../../stylesheets/skills/Fishing.module.css'

export function FishingArea ({locked}) {

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