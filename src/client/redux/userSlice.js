import { createSlice, current } from '@reduxjs/toolkit';
import { expTable, actionExpValues, bankSlotCosts } from "../tables.js";

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
    buyExtraBankSlot: (state) => {
      state.userObject.gold -= bankSlotCosts[state.userObject.maxBankSpace - 12];
      state.userObject.maxBankSpace += 1;
    },

    update: (state, action) => {
      state.userObject = action.payload;
    }
  }
})

export const { initial, cutWood, buyExtraBankSlot, update } = userSlice.actions;

export const selectUserObject = state => state.user.userObject;

export default userSlice.reducer;
