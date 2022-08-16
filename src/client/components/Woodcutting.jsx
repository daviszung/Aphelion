import { useState } from 'react'

export function Woodcutting(props) {
  const [selectedActive, setSelectedActive] = useState(null);

  function cutWood(woodtype) {
    const copyObj = props.userObj;
    console.log(props.userObj.levels.woodcutting.exp)

    if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
      copyObj.bank[woodtype] += 1;
    } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
      copyObj.bank[woodtype] = 1;
    }
    copyObj.levels.woodcutting.exp += 10;
    props.setUserObj(...current => copyObj)
  }

  return (
    <div>
      <button className='actionBtn' onClick={() => {
        setSelectedActive('Normal Log')
        cutWood('Normal Log')}}>
        <div>Normal Tree</div>
        <div>10xp / 1 seconds</div>
      </button>
      <div>{props.userObj && props.userObj.bank ? props.userObj.levels.woodcutting.exp : null}</div>
    </div>
  )
}