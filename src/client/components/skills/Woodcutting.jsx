import { useEffect, useState } from 'react'
import { expTable, woodExpValues, woodTimeValues } from '../../tables.jsx'


export function Woodcutting(props) {
  const [selectedActive, setSelectedActive] = useState(null);

  function cutWood(woodtype) {
    const copyObj = props.state.userObj;

    // add logs to the bank
    if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
      copyObj.bank[woodtype] += 1;
      
    } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
      copyObj.bankSpace += 1;
      copyObj.bank[woodtype] = 1;
    }

    // add experience and potentially level up
    copyObj.levels.woodcutting.exp += woodExpValues[woodtype];
    if (copyObj.levels.woodcutting.exp >= expTable[copyObj.levels.woodcutting.level + 1]) {
      copyObj.levels.woodcutting.level += 1; 
      copyObj.levels.woodcutting.current += 1;
    }

    // dispatch and update state
    props.dispatch({type: 'update', updatedObj: copyObj})
    return;
  }

  // performs an action, should be moved to global
  useEffect(() => {
    let interval;
    if (selectedActive !== null) {
      interval = setInterval(()=> {
        cutWood(selectedActive)
      }, woodTimeValues[selectedActive])
    }
    return () => {
      clearInterval(interval)
    }
  }, [selectedActive])

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
        setSelectedActive('Normal Log')}}>
        <div>Normal Tree</div>
        <div>10xp / 3 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/normal_tree.svg'></img>
      </button>
      <button id='oakLogBtn' className='actionBtn' style={{display: props.state.userObj.levels.woodcutting.level >= 10 ? 'flex' : 'none'}} onClick={() => {
        setSelectedActive('Oak Log')}}>
        <div>Oak Tree</div>
        <div>15xp / 4 seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/skills/woodcutting/oak_tree.svg'></img>
      </button>
    </div>
  )
}
