import { useState } from 'react'

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
    props.dispatch({type: 'update', updatedObj: copyObj})
    return;
  }

  return (
    <div>
      <button className='actionBtn' onClick={() => {
        setSelectedActive('Normal Log')
        cutWood('Normal Log')}}>
        <div>Normal Tree</div>
        <div>10xp / 1 seconds</div>
      </button>
      <div style={{color: 'white'}}>{props.state.userObj && props.state.userObj.bank ? props.state.userObj.levels.woodcutting.exp : null}</div>
    </div>
  )
}