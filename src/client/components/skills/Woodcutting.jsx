import style from '../../stylesheets/skills/Woodcutting.module.css'
import { expTable } from '../../tables.js'

const axeType = {
  0: 'BRONZE AXE',
  5: 'IRON AXE',
  10: 'STEEL AXE',
  20: 'MITHRIL AXE',
  30: 'ADAMANT AXE',
  40: 'RUNE AXE',
  50: 'DRAGON AXE',
}


export function Woodcutting(props) {
  return (
    <div className={style.woodcuttingSkillContainer}>
      <div className={style.skillInfoContainer}>
        <div className={style.innerInfoContainer}>
          <span>SKILL XP <span className={style.expColor}>{props.state ? props.state.levels.woodcutting.exp.toLocaleString() : null} / {props.state ? expTable[props.state.levels.woodcutting.level + 1].toLocaleString() : null}</span></span>
          <div className={style.flexAlign}><div style={{marginRight: '10px'}}>CURRENT AXE</div><div className={style.axeType}>{axeType[props.state.modifiers.axe]}</div></div>
        </div>
        <div className={style.expBar}><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${props.state ? ((props.state.levels.woodcutting.exp - expTable[props.state.levels.woodcutting.level]) / (expTable[props.state.levels.woodcutting.level + 1] - expTable[props.state.levels.woodcutting.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id={style['normalLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Normal Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Normal Log')}}}>
        <div>Normal Tree</div>
        <div>10xp / {(3 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/normal_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Normal Log' ? {'animation': `${style.load} ${3 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      {props.state.levels.woodcutting.level >= 10 && 
      <button id={style['oakLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Oak Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Oak Log')}}}>
        <div>Oak Tree</div>
        <div>15xp / {(4 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/oak_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Oak Log' ? {'animation': `${style.load} ${4 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 25 && 
      <button id={style['willowLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Willow Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Willow Log')}}}>
        <div>Willow Tree</div>
        <div>22xp / {(5 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/willow_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Willow Log' ? {'animation': `${style.load} ${5 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 35 && 
      <button id={style['teakLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Teak Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Teak Log')}}}>
        <div>Teak Tree</div>
        <div>30xp / {(6 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/teak_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Teak Log' ? {'animation': `${style.load} ${6 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 45 && 
      <button id={style['mapleLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Maple Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Maple Log')}}}>
        <div>Maple Tree</div>
        <div>40xp / {(8 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/maple_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Maple Log' ? {'animation': `${style.load} ${8 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 55 && 
      <button id={style['mahoganyLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Mahogany Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Mahogany Log')}}}>
        <div>Mahogany Tree</div>
        <div>60xp / {(10 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/mahogany_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Mahogany Log' ? {'animation': `${style.load} ${10 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 60 && 
      <button id={style['yewLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Yew Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Yew Log')}}}>
        <div>Yew Tree</div>
        <div>80xp / {(12 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/yew_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Yew Log' ? {'animation': `${style.load} ${12 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 75 && 
      <button id={style['magicLogbtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Magic Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Magic Log')}}}>
        <div>Magic Tree</div>
        <div>100xp / {(20 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/magic_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Magic Log' ? {'animation': `${style.load} ${20 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
      {props.state.levels.woodcutting.level >= 90 && 
      <button id={style['redwoodLogBtn']} className={style.actionBtn} onClick={() => {
        if (props.selectedAction === 'Redwood Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Redwood Log')}}}>
        <div>Redwood Tree</div>
        <div>180xp / {(15 * (100 - props.state.modifiers.axe) / 100).toFixed(2)} seconds</div>
        <img className={style.treeImages} src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/redwood_tree.svg'></img>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={props.selectedAction === 'Redwood Log' ? {'animation': `${style.load} ${15 * ((100 - props.state.modifiers.axe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      }
    </div>
  )
}
