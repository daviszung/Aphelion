import { createSlice, current } from '@reduxjs/toolkit';
import { expTable, actionExpValues } from "../tables.js";

export const userSlice = createSlice({
  name: 'userObject',
  initialState: {
    userObject: false
  },
  reducers: {
    initial: (state, action) => {
      state.userObject = action.payload.userObject;
    },
    cutWood: (state, action) => {
      console.log('here', action)
      console.log(current(state))
      const woodtype = action.payload;

      // add logs to the bank
      if (state.userObject.bank[woodtype] && state.userObject.bankSpace <= state.userObject.maxBankSpace) {
        state.userObject.bank[woodtype] += 1;
        
      } else if (!state.userObject.bank[woodtype] && state.userObject.bankSpace < state.userObject.maxBankSpace){
        state.userObject.bankSpace += 1;
        state.userObject.bank[woodtype] = 1;
      }

      // add experience and potentially level up
      state.userObject.levels.woodcutting.exp += actionExpValues[woodtype];
      if (state.userObject.levels.woodcutting.level < 99 && state.userObject.levels.woodcutting.exp >= expTable[state.userObject.levels.woodcutting.level + 1]) {
        state.userObject.levels.woodcutting.level += 1; 
        state.userObject.levels.woodcutting.current += 1;
      }
    },

    update: (state, action) => {
      state.userObject = action.payload;
    }
  }
})

export const { initial, cutWood, update } = userSlice.actions;

export const selectUserObject = state => state.user.userObject;

export default userSlice.reducer;