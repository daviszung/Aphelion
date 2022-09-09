import { createSlice, current } from '@reduxjs/toolkit';
import { expTable, actionExpValues, bankSlotCosts, itemGoldValues } from "../tables.js";

export const userSlice = createSlice({
  name: 'userObject',
  initialState: {
    userObject: false
  },
  reducers: {
    initial: (state, action) => {
      state.userObject = action.payload.userObject;
    },
    sellItem: (state, action) => {
      const { sellAmount, selectedItem } = action.payload;
      state.userObject.gold += (sellAmount * itemGoldValues[selectedItem]);

      // if the amount being sold is >= the amount in bank, remove the item from bank
      if (sellAmount >= state.userObject.bank[selectedItem]) {
        delete state.userObject.bank[selectedItem];
        state.userObject.bankSpace -= 1;
      } else {
        state.userObject.bank[selectedItem] -= sellAmount;
      }
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

    mine: (state, action) => {
      const minedItem = action.payload;

      // add items to the bank
      if (state.userObject.bank[minedItem] && state.userObject.bankSpace <= state.userObject.maxBankSpace) {
        state.userObject.bank[minedItem] += 1;
        
      } else if (!state.userObject.bank[minedItem] && state.userObject.bankSpace < state.userObject.maxBankSpace){
        state.userObject.bankSpace += 1;
        state.userObject.bank[minedItem] = 1;
      }
      // add experience and potentially level up
      state.userObject.levels.mining.exp += actionExpValues[minedItem];
      if (state.userObject.levels.mining.level < 99 && state.userObject.levels.mining.exp >= expTable[state.userObject.levels.mining.level + 1]) {
        state.userObject.levels.mining.level += 1; 
        state.userObject.levels.mining.current += 1;
      }
    },

    buyExtraBankSlot: (state) => {
      state.userObject.gold -= bankSlotCosts[state.userObject.maxBankSpace - 12];
      state.userObject.maxBankSpace += 1;
    },

    buyAxeUpgrade: (state, action) => {
      if (state.userObject.modifiers.axe < 10) {
        state.userObject.modifiers.axe += 5;
      } else {
        state.userObject.modifiers.axe += 10;
      }
      state.userObject.gold -= action.payload;
    },
    buyPickaxeUpgrade: (state, action) => {
      if (state.userObject.modifiers.pickaxe < 10) {
        state.userObject.modifiers.pickaxe += 5;
      } else {
        state.userObject.modifiers.pickaxe += 10;
      }
      state.userObject.gold -= action.payload;
    },
    buyFishingRodUpgrade: (state, action) => {
      if (state.userObject.modifiers.fishingRod < 10) {
        state.userObject.modifiers.fishingRod += 5;
      } else {
        state.userObject.modifiers.fishingRod += 10;
      }
      state.userObject.gold -= action.payload;
    },

    update: (state, action) => {
      state.userObject = action.payload;
    }
  }
})

export const { initial, sellItem, cutWood, mine, buyExtraBankSlot, buyAxeUpgrade, buyPickaxeUpgrade, buyFishingRodUpgrade, update } = userSlice.actions;

export const selectUserObject = state => state.user.userObject;

export default userSlice.reducer;
