import { useEffect, useState } from 'react'
import { expTable } from '../../expTable.jsx'


async function updateUserInDB (body) {
  const data = await fetch('http://localhost:3000/api/updateUser', {
    method: "PATCH",
    body: body,
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (data['status'] !== 200) {
    throw new Error()
  }
  return;
}

export function Woodcutting(props) {
  const [selectedActive, setSelectedActive] = useState(null);

  function cutWood(woodtype) {
    const copyObj = props.state.userObj;

    // add logs to the bank
    if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
      copyObj.bank[woodtype] += 1;
    } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
      copyObj.bank[woodtype] = 1;
    }

    // add experience and potentially level up
    copyObj.levels.woodcutting.exp += 10;
    if (copyObj.levels.woodcutting.exp >= expTable[copyObj.levels.woodcutting.level + 1]) {
      copyObj.levels.woodcutting.level += 1; 
      copyObj.levels.woodcutting.current += 1;
    }

    // dispatch and update state
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
      <button onClick={() => {
        const body = JSON.stringify(props.state.userObj)
        updateUserInDB(body)
        }}>click me</button>
      <div style={{color: 'white'}}>{props.state.userObj ? props.state.userObj.levels.woodcutting.exp : null}</div>      
    </div>
  )
}
