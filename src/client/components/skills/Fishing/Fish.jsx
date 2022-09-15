import style from '../../../stylesheets/skills/Fishing.module.css'



export function Fish ({unlocked, fish}) {
  if (unlocked) {
    return (
      <div>
        UNLOCKED FISH
      </div>
    )
    
  } else {
    return (
      <div className={style.lockedFish}>
        <div className={style.lockedFish}><div>Unlocked at </div><img className={style.lockedFishImg} src='https://cdn.melvor.net/core/v018/assets/media/skills/fishing/fishing.svg'></img><div>Level</div></div>
      </div>
    )
  }
}