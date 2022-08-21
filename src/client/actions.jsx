import { expTable, actionExpValues } from "./tables.jsx";

export function cutWood(woodtype, state, dispatch) {
  const copyObj = state.userObj;

  // add logs to the bank
  if (copyObj.bank[woodtype] && copyObj.bankSpace <= copyObj.maxBankSpace) {
    copyObj.bank[woodtype] += 1;
    
  } else if (!copyObj.bank[woodtype] && copyObj.bankSpace < copyObj.maxBankSpace){
    copyObj.bankSpace += 1;
    copyObj.bank[woodtype] = 1;
  }

  // add experience and potentially level up
  copyObj.levels.woodcutting.exp += actionExpValues[woodtype];
  if (copyObj.levels.woodcutting.exp >= expTable[copyObj.levels.woodcutting.level + 1]) {
    copyObj.levels.woodcutting.level += 1; 
    copyObj.levels.woodcutting.current += 1;
  }

  // dispatch and update state
  dispatch({type: 'update', updatedObj: copyObj})
  return;
}