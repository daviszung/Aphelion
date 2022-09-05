import { expTable } from '../../tables.js'

const pickaxeType = {
  0: 'BRONZE PICKAXE',
  5: 'IRON PICKAXE',
  10: 'STEEL PICKAXE',
  20: 'MITHRIL PICKAXE',
  30: 'ADAMANT PICKAXE',
  40: 'RUNE PICKAXE',
  50: 'DRAGON PICKAXE',
}

export function Mining({state, selectedAction, setSelectedAction}) {
  return (
    <div className='woodcuttingSkillContainer'>
      <div className='skillInfoContainer miningColor'>
        <div className='innerInfoContainer'>
          <span>SKILL XP <span className='expColor'>{state ? state.levels.mining.exp.toLocaleString() : null} / {state ? expTable[state.levels.mining.level + 1].toLocaleString() : null}</span></span>
          <div className='flexAlign'><div style={{marginRight: '10px'}}>CURRENT PICKAXE</div><div className='axeType'>{pickaxeType[state.modifiers.pickaxe]}</div></div>
        </div>
        <div className='expBar'><div style={{background: '#5cace5', borderRadius: '25px', height: '100%', "maxWidth": '100%', width: `${state ? ((state.levels.mining.exp - expTable[state.levels.mining.level]) / (expTable[state.levels.mining.level + 1] - expTable[state.levels.mining.level])) * 100 : 0}%`}}></div></div>
      </div>
      <button id='normalLogBtn' className='actionBtn miningColor' onClick={() => {
        if (selectedAction === 'Rune Essence') {
          setSelectedAction(null)
        } else {setSelectedAction('Rune Essence')}}}>
        <div>Rune Essence</div>
        <div>5xp / {(3 * (100 - state.modifiers.pickaxe) / 100).toFixed(2)} seconds</div>
        <img className='treeImages' src='https://cdn.melvor.net/core/v018/assets/media/bank/rune_essence.png'></img>
        <div className='progressBarContainer'>
          <div className='progressBar' style={selectedAction === 'Rune Essence' ? {'animation': `load ${3 * ((100 - state.modifiers.pickaxe) / 100)}s linear infinite`} : {width: '0%'}}></div>
        </div>
      </button>
    </div>
  )
}