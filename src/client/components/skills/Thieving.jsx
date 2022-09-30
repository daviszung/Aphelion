import style from '../../stylesheets/skills/Thieving.module.css'
import { expTable } from '../../tables.js'
import { thievingImages } from '../../images'

export function Thieving({state, selectedAction, setSelectedAction}) {
  return (
    <div className={style.skillContainer}>
      <div className={style.skillInfoContainer}>
        <div className={style.innerInfoContainer}>
          <span>SKILL XP <span className={style.expColor}>{state ? state.levels.thieving.exp.toLocaleString() : null} / {state ? expTable[state.levels.thieving.level + 1].toLocaleString() : null}</span></span>
          <div className={style.flexAlign}><div style={{marginRight: '10px'}}>HP</div><div className={style.hpContainer}>{state.combat.hp} / {state.levels.constitution.current * 10}</div></div>
        </div>
        <div className={style.expBar}><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${state ? ((state.levels.thieving.exp - expTable[state.levels.thieving.level]) / (expTable[state.levels.thieving.level + 1] - expTable[state.levels.thieving.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id={style['manBtn']} className={style.actionBtn} onClick={() => {
        if (selectedAction === 'Pickpocket Man') {
          setSelectedAction(null)
        } else {setSelectedAction('Pickpocket Man')}}}>
        <div>Man</div>
        <div>5xp / {(3 * (100 - state.modifiers.pickpocket) / 100).toFixed(2)} seconds</div>
        <img className={style.npcImages} src={thievingImages['Man']}></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Pickpocket Man' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
    </div>
  )
}
