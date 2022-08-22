import { expTable } from '../../tables.jsx'


export function Woodcutting(props) {
  return (
    <div className='woodcuttingSkillContainer'>
      <div className='skillInfoContainer'>
        <div className='innerInfoContainer'>
          <span>SKILL XP <span className='expColor'>{props.state.userObj ? props.state.userObj.levels.woodcutting.exp.toLocaleString() : null} / {props.state.userObj ? expTable[props.state.userObj.levels.woodcutting.level + 1].toLocaleString() : null}</span></span>    
          <div>CURRENT AXE </div>
        </div>
        <div className='expBar'><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${props.state.userObj ? ((props.state.userObj.levels.woodcutting.exp - expTable[props.state.userObj.levels.woodcutting.level]) / (expTable[props.state.userObj.levels.woodcutting.level + 1] - expTable[props.state.userObj.levels.woodcutting.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id='normalLogBtn' className='actionBtn' onClick={() => {
        if (props.selectedAction === 'Normal Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Normal Log')}}}>
        <div>Normal Tree</div>
        <div>10xp / 3 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/normal_tree.svg'></img>
        <div style={{background: `${props.selectedAction === 'Normal Log' ? '#158d6d' : '#434654'}`, borderRadius: '5px', height: '35px', "maxWidth": '100%', width: '90%'}}></div>
      </button>
      <button id='oakLogBtn' className='actionBtn' style={{display: props.state.userObj.levels.woodcutting.level >= 10 ? 'flex' : 'none'}} onClick={() => {
        if (props.selectedAction === 'Oak Log') {
          props.setSelectedAction(null)
        } else {props.setSelectedAction('Oak Log')}}}>
        <div>Oak Tree</div>
        <div>15xp / 4 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/oak_tree.svg'></img>
        <div style={{background: `${props.selectedAction === 'Oak Log' ? '#158d6d' : '#434654'}`, borderRadius: '5px', height: '35px', "maxWidth": '100%', width: '90%'}}></div>
      </button>
    </div>
  )
}
