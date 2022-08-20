import { useEffect, useState } from 'react'

export function Woodcutting(props) {
  const [selectedActive, setSelectedActive] = useState(null);

  async function cutWood(woodtype) {
    const copyObj = props.state.userObj;
    console.log(props.state.userObj.levels.woodcutting.exp)

    if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
      copyObj.bank[woodtype] += 1;
    } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
      copyObj.bank[woodtype] = 1;
    }
    copyObj.levels.woodcutting.exp += 10;
    console.log("copy: ", copyObj)
    await props.dispatch({type: 'Normal Log', updatedObj: copyObj})
    console.log(props.state.userObj)
  }

  useEffect(() => {
    console.log('any rerender of woodcutting')
  })

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