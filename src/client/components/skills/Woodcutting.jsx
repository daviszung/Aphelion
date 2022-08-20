import { useState } from 'react'
import { expTable } from '../../expTable.jsx'


export function Woodcutting(props) {
  const [selectedActive, setSelectedActive] = useState(null);

  async function cutWood(woodtype) {
    const copyObj = props.state.userObj;

    if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
      copyObj.bank[woodtype] += 1;
    } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
      copyObj.bank[woodtype] = 1;
    }
    copyObj.levels.woodcutting.exp += 10;
    if (copyObj.levels.woodcutting.exp >= expTable[copyObj.levels.woodcutting.level + 1]) {
      console.log('level up')
      copyObj.levels.woodcutting.level += 1; 
      copyObj.levels.woodcutting.current += 1;
      console.log(copyObj.bank)
    }
    props.dispatch({type: 'update', updatedObj: copyObj})
    return;
  }

  return (
    <div className='woodcuttingSkillContainer'>
      <div className='expBar'><div style={{background: '#eebbc3', height: '100%', "maxWidth": '100%', width: `${props.state.userObj ? ((props.state.userObj.levels.woodcutting.exp - expTable[props.state.userObj.levels.woodcutting.level]) / (expTable[props.state.userObj.levels.woodcutting.level + 1] - expTable[props.state.userObj.levels.woodcutting.level])) * 100 : 0}%`}}></div></div>
      <button id='normalLogBtn' className='actionBtn' onClick={() => {
        setSelectedActive('Normal Log')
        cutWood('Normal Log')}}>
        <div>Normal Tree</div>
        <div>10xp / 1 seconds</div>
      </button>
      <div style={{color: 'white'}}>{props.state.userObj ? props.state.userObj.levels.woodcutting.exp : null}</div>
      <div style={{color: 'white'}}>{props.state.userObj ? props.state.userObj.levels.woodcutting.level : null}</div>
      
    </div>
  )
}
