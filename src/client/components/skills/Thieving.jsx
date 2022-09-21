import style from '../../stylesheets/skills/Thieving.module.css'
import { expTable } from '../../tables.js'

const pickaxeType = {
  0: 'BRONZE PICKAXE',
  5: 'IRON PICKAXE',
  10: 'STEEL PICKAXE',
  20: 'MITHRIL PICKAXE',
  30: 'ADAMANT PICKAXE',
  40: 'RUNE PICKAXE',
  50: 'DRAGON PICKAXE',
}

export function Thieving({state, selectedAction, setSelectedAction}) {
  return (
    <div className={style.miningSkillContainer}>
      <div className={style.skillInfoContainer}>
        <div className={style.innerInfoContainer}>
          <span>SKILL XP <span className={style.expColor}>{state ? state.levels.mining.exp.toLocaleString() : null} / {state ? expTable[state.levels.mining.level + 1].toLocaleString() : null}</span></span>
        </div>
        <div className={style.expBar}><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${state ? ((state.levels.mining.exp - expTable[state.levels.mining.level]) / (expTable[state.levels.mining.level + 1] - expTable[state.levels.mining.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id={style['runeEssenceBtn']} className={style.actionBtn} onClick={() => {
        if (selectedAction === 'Rune Essence') {
          setSelectedAction(null)
        } else {setSelectedAction('Rune Essence')}}}>
        <div>Rune Essence</div>
        <div>5xp / {(3 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/bank/rune_essence.png'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Rune Essence' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['copperRockBtn']} className={style.actionBtn} onClick={() => {
        if (selectedAction === 'Copper Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Copper Ore')}}}>
        <div>Copper Rock</div>
        <div>7xp / {(3 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_copper.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Copper Ore' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['tinRockBtn']} className={style.actionBtn} onClick={() => {
        if (selectedAction === 'Tin Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Tin Ore')}}}>
        <div>Tin Rock</div>
        <div>7xp / {(3 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_tin.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Tin Ore' ? {'animation': `${style.load} ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['ironRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 15 ? 'flex' : 'none'}} onClick={() => {
        if (selectedAction === 'Iron Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Iron Ore')}}}>
        <div>Iron Rock</div>
        <div>14xp / {(5 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_iron.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Iron Ore' ? {'animation': `${style.load} ${5 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['coalRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 25 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Coal Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Coal Ore')}}}>
        <div>Coal Rock</div>
        <div>18xp / {(6 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_coal.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Coal Ore' ? {'animation': `${style.load} ${6 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['silverRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 30 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Silver Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Silver Ore')}}}>
        <div>Silver Rock</div>
        <div>25xp / {(7 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_silver.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Silver Ore' ? {'animation': `${style.load} ${7 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['goldRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 40 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Gold Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Gold Ore')}}}>
        <div>Gold Rock</div>
        <div>28xp / {(7 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_gold.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Gold Ore' ? {'animation': `${style.load} ${7 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['mithrilRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 50 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Mithril Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Mithril Ore')}}}>
        <div>Mithril Rock</div>
        <div>65xp / {(10 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_mithril.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Mithril Ore' ? {'animation': `${style.load} ${10 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['adamantiteRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 70 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Adamantite Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Adamantite Ore')}}}>
        <div>Adamantite Rock</div>
        <div>85xp / {(12 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_adamantite.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Adamantite Ore' ? {'animation': `${style.load} ${12 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['runiteRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 80 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Runite Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Runite Ore')}}}>
        <div>Runite Rock</div>
        <div>115xp / {(15 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_runite.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Runite Ore' ? {'animation': `${style.load} ${15 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id={style['dragoniteRockBtn']} className={style.actionBtn} style={{display: state.levels.mining.level >= 95 ? 'flex' : 'none'}}onClick={() => {
        if (selectedAction === 'Dragonite Ore') {
          setSelectedAction(null)
        } else {setSelectedAction('Dragonite Ore')}}}>
        <div>Dragonite Rock</div>
        <div>175xp / {(20 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className={style.rockImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/mining/rock_dragonite.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={selectedAction === 'Dragonite Ore' ? {'animation': `${style.load} ${20 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
    </div>
  )
}
