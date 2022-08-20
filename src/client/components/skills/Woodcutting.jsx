import { useState } from 'react'


function levelFormula(num) {
  let x = num;
  x = (x + (300 * (2 ** (x / 7)))) / 4
  return Math.round(x)
}

function calculateExpDiff(num, currentExp) {
  let x = num - 1;
  x = (x + (300 * (2 ** (x / 7)))) / 4
  const prevExp = Math.round(x) > 83 ? Math.round(x) : 83;
  console.log(prevExp)
  return Math.round(x)
}

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
    if (copyObj.levels.woodcutting.exp >= copyObj.levels.woodcutting.expToLevel) {
      console.log('level up')
      copyObj.levels.woodcutting.level += 1;
      copyObj.levels.woodcutting.expToLevel += levelFormula(copyObj.levels.woodcutting.level)
      console.log(copyObj.levels.woodcutting)
    }
    props.dispatch({type: 'update', updatedObj: copyObj})
    return;
  }

  return (
    <div className='woodcuttingSkillContainer'>
      <div className='expBar'><div style={{background: '#eebbc3', height: '100%', "max-width": '100%', width: `${props.state.userObj ? Math.round((calculateExpDiff(props.state.userObj.levels.woodcutting.level) / props.state.userObj.levels.woodcutting.expToLevel) * 100) : 0}%`}}></div></div>
      <button id='normalLogBtn' className='actionBtn' onClick={() => {
        setSelectedActive('Normal Log')
        cutWood('Normal Log')}}>
        <div>Normal Tree</div>
        <div>10xp / 1 seconds</div>
      </button>
      <div style={{color: 'white'}}>{props.state.userObj ? props.state.userObj.levels.woodcutting.exp : null}</div>
    </div>
  )
}
