import { createSlice, current } from '@reduxjs/toolkit';
import { expTable, actionExpValues, bankSlotCosts, itemGoldValues } from "../tables.js";

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

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
      if (state.userObject.bank[woodtype]) {
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
      let gemFound = false;
      if (Math.random() < 0.01) {
        gemFound = Math.random()
        if (gemFound <= 0.5) {gemFound = 'Topaz'}
        else if (gemFound <= 0.675) {gemFound = 'Sapphire'}
        else if (gemFound <= 0.85) {gemFound = 'Ruby'}
        else if (gemFound <= 0.95) {gemFound = 'Emerald'}
        else {gemFound = 'Diamond'}
      }

      // add ore to the bank
      if (state.userObject.bank[minedItem]) {
        state.userObject.bank[minedItem] += 1;
        
      } else if (!state.userObject.bank[minedItem] && state.userObject.bankSpace < state.userObject.maxBankSpace){
        state.userObject.bankSpace += 1;
        state.userObject.bank[minedItem] = 1;
      }

      // add gem to the bank
      if (gemFound !== false) {
        if (state.userObject.bank[gemFound]) {
          state.userObject.bank[gemFound] += 1;
        } else if (!state.userObject.bank[gemFound] && state.userObject.bankSpace < state.userObject.maxBankSpace) {
          state.userObject.bankSpace += 1;
          state.userObject.bank[gemFound] = 1;
        }
      }

      // add experience and potentially level up
      state.userObject.levels.mining.exp += actionExpValues[minedItem];
      if (state.userObject.levels.mining.level < 99 && state.userObject.levels.mining.exp >= expTable[state.userObject.levels.mining.level + 1]) {
        state.userObject.levels.mining.level += 1; 
        state.userObject.levels.mining.current += 1;
      }
    },

    fish: (state, action) => {
      // partition a section of a random number out of onehundred chance to each category
      const fish = action.payload.fish
      const chanceJunk = action.payload.chanceJunk;
      const chanceSpecial = action.payload.chanceSpecial;
      const chance = Math.floor(Math.random() * 100)

      // fished a fish, add to bank and add exp
      if (chance >= (chanceJunk + chanceSpecial)) {
        if (state.userObject.bank[fish]) {
          state.userObject.bank[fish] += 1;
        } else if (!state.userObject.bank[fish] && state.userObject.bankSpace < state.userObject.maxBankSpace) {
          state.userObject.bankSpace += 1;
          state.userObject.bank[fish] = 1;
        }

        // add experience and potentially level up
        state.userObject.levels.fishing.exp += actionExpValues[fish];
        if (state.userObject.levels.fishing.level < 99 && state.userObject.levels.fishing.exp >= expTable[state.userObject.levels.fishing.level + 1]) {
          state.userObject.levels.fishing.level += 1; 
          state.userObject.levels.fishing.current += 1;
        }
      }
      // fished up junk, add to bank, no exp
      else if (chance > chanceSpecial && chance < (chanceJunk + chanceSpecial)) {
        // im not going to have a random junk table, its unnecessary and an annoying mechanic that clutters bank space
        if (state.userObject.bank['Seaweed']) {
          state.userObject.bank['Seaweed'] += 1;
        } else if (!state.userObject.bank['Seaweed'] && state.userObject.bankSpace < state.userObject.maxBankSpace) {
          state.userObject.bankSpace += 1;
          state.userObject.bank['Seaweed'] = 1;
        }
      } 
      // fished up special, add to bank, no exp
      else {
        console.log('SPECIAL', chance)
        // special should just be a treasure chest, opening the chest should give gems or gold etc.
        if (state.userObject.bank['Treasure Chest']) {
          state.userObject.bank['Treasure Chest'] += 1;
        } else if (!state.userObject.bank['Treasure Chest'] && state.userObject.bankSpace < state.userObject.maxBankSpace) {
          state.userObject.bankSpace += 1;
          state.userObject.bank['Treasure Chest'] = 1;
        }
      }
    },

    pickpocket: (state, action) => {
      // roll for success: Stealth vs Perception
      const stealth = 100 + state.userObject.modifiers.stealth;
      const perception = action.payload.perception;
      const chanceOfSuccess = stealth / perception;
      const rollForSuccess = Math.random();
      if (rollForSuccess <= chanceOfSuccess) {
        console.log('successful pick: ', chanceOfSuccess, rollForSuccess)
      } else {
        const rollForDmg = Math.round(getRandomNum(1, action.payload.maxHit));
        if (state.userObject.combat.hp > rollForDmg) {
          state.user.combat.hp -= rollForDmg;
        } else {
          // player is dead, maybe i should have a function for this?
        }
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
    addKeyItem: (state, action) => {
      if (state.userObject.keyItems[action.payload.item] === undefined) {
        state.userObject.keyItems[action.payload.item] = true;
      }
      state.userObject.gold -= action.payload.cost;
    },

    update: (state, action) => {
      state.userObject = action.payload;
    }
  }
})
export const { initial, sellItem, cutWood, mine, fish, pickpocket, buyExtraBankSlot, buyAxeUpgrade, buyPickaxeUpgrade, buyFishingRodUpgrade, addKeyItem, update } = userSlice.actions;


export const selectUserObject = state => state.user.userObject;

export default userSlice.reducer;
