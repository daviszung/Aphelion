import style from '../../../stylesheets/skills/Fishing.module.css'



export function Fish ({unlocked, fish, img, level}) {
  if (unlocked) {
    return (
      <button className={style.unlockedFish}>
        <img className={style.fishImg} src={img}></img>
        <div className={style.fishName}>{fish}</div>
      </button>
    )
  } else {
    return (
      <div className={style.lockedFish}>
        <div className={style.lockedFish}><div>Unlocked at </div><img className={style.fishImg} src='https://cdn.melvor.net/core/v018/assets/media/skills/fishing/fishing.svg'></img><div>Level {level}</div></div>
      </div>
    )
  }
}