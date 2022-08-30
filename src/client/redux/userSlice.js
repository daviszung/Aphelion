import { createSlice, current } from '@reduxjs/toolkit';
import { expTable, actionExpValues } from "../tables.js";

export const userSlice = createSlice({
  name: 'userObject',
  initialState: {
    userObject: null
  },
  reducers: {
    initial: (state, action) => {
      state.userObject = action.payload;
    },
    cutWood: (state, action) => {
      const woodtype = action.payload;

      // add logs to the bank
      if (state.userObj.bank[woodtype] && state.userObj.bankSpace <= state.userObj.maxBankSpace) {
        state.userObj.bank[woodtype] += 1;
        
      } else if (!state.userObj.bank[woodtype] && state.userObj.bankSpace < state.userObj.maxBankSpace){
        state.userObj.bankSpace += 1;
        state.userObj.bank[woodtype] = 1;
      }

      // add experience and potentially level up
      state.userObj.levels.woodcutting.exp += actionExpValues[woodtype];
      if (state.userObj.levels.woodcutting.level < 99 && state.userObj.levels.woodcutting.exp >= expTable[state.userObj.levels.woodcutting.level + 1]) {
        state.userObj.levels.woodcutting.level += 1; 
        state.userObj.levels.woodcutting.current += 1;
      }
    },

    update: (state, action) => {
      state.userObj = action.payload;
    }
  }
})

export const { initial, cutWood, update } = userSlice.actions;

export const selectUserObj = state => state.user.userObject;

export default userSlice.reducer;