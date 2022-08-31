import { expTable, actionTimeValues } from '../../tables.js'


export function Woodcutting(props) {
  return (
    <div className='woodcuttingSkillContainer'>
      <div className='skillInfoContainer'>
        <div className='innerInfoContainer'>
          <span>SKILL XP <span className='expColor'>{props.state ? props.state.levels.woodcutting.exp.toLocaleString() : null} / {props.state ? expTable[props.state.levels.woodcutting.level + 1].toLocaleString() : null}</span></span>
          <div>CURRENT AXE</div>
        </div>
        <div className='expBar'><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${props.state ? ((props.state.levels.woodcutting.exp - expTable[props.state.levels.woodcutting.level]) / (expTable[props.state.levels.woodcutting.level + 1] - expTable[props.state.levels.woodcutting.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id='normalLogBtn' className='actionBtn' onClick={() => {
        if (props.selectedAction === 'Normal Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Normal Log')}}}>
        <div>Normal Tree</div>
        <div>10xp / 3 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/normal_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Normal Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='oakLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 10 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Oak Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Oak Log')}}}>
        <div>Oak Tree</div>
        <div>15xp / 4 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/oak_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Oak Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='willowLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 25 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Willow Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Willow Log')}}}>
        <div>Willow Tree</div>
        <div>22xp / 5 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/willow_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Willow Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='teakLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 35 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Teak Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Teak Log')}}}>
        <div>Teak Tree</div>
        <div>30xp / 6 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/teak_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Teak Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='mapleLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 45 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Maple Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Maple Log')}}}>
        <div>Maple Tree</div>
        <div>40xp / 8 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/maple_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Maple Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='mahoganyLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 55 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Mahogany Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Mahogany Log')}}}>
        <div>Mahogany Tree</div>
        <div>60xp / 10 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/mahogany_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Mahogany Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='yewLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 60 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Yew Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Yew Log')}}}>
        <div>Yew Tree</div>
        <div>80xp / 12 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/yew_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Yew Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='magicLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 75 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Magic Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Magic Log')}}}>
        <div>Magic Tree</div>
        <div>100xp / 20 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/magic_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Magic Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
      <button id='redwoodLogBtn' className='actionBtn' style={{display: props.state.levels.woodcutting.level >= 90 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Redwood Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Redwood Log')}}}>
        <div>Redwood Tree</div>
        <div>180xp / 15 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/redwood_tree.svg'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={props.selectedAction === 'Redwood Log' ? {'animation': `load ${actionTimeValues[props.selectedAction]}ms linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
    </div>
  )
}
