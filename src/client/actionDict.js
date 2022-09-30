import { cutWood, mine, fish, pickpocket } from "./redux/userSlice";

export const actionDict = {
  "Normal Log": {
    action: cutWood("Normal Log"),
    modifierType: "axe"
  },
  "Oak Log": {
    action: cutWood("Oak Log"),
    modifierType: "axe"
  },
  "Willow Log": {
    action: cutWood("Willow Log"),
    modifierType: "axe"
  },
  "Teak Log": {
    action: cutWood("Teak Log"),
    modifierType: "axe"
  },
  "Maple Log": {
    action: cutWood("Maple Log"),
    modifierType: "axe"
  },
  "Mahogany Log": {
    action: cutWood("Mahogany Log"),
    modifierType: "axe"
  },
  "Yew Log": {
    action: cutWood("Yew Log"),
    modifierType: "axe"
  },
  "Magic Log": {
    action: cutWood("Magic Log"),
    modifierType: "axe"
  },
  "Redwood Log": {
    action: cutWood("Redwood Log"),
    modifierType: "axe"
  },
  "Rune Essence": {
    action: mine("Rune Essence"),
    modifierType: "pickaxe"
  },
  "Copper Ore": {
    action: mine("Copper Ore"),
    modifierType: "pickaxe"
  },
  "Tin Ore": {
    action: mine("Tin Ore"),
    modifierType: "pickaxe"
  },
  "Iron Ore": {
    action: mine("Iron Ore"),
    modifierType: "pickaxe"
  },
  "Coal Ore": {
    action: mine("Coal Ore"),
    modifierType: "pickaxe"
  },
  "Silver Ore": {
    action: mine("Silver Ore"),
    modifierType: "pickaxe"
  },
  "Gold Ore": {
    action: mine("Gold Ore"),
    modifierType: "pickaxe"
  },
  "Mithril Ore": {
    action: mine("Mithril Ore"),
    modifierType: "pickaxe"
  },
  "Adamantite Ore": {
    action: mine("Adamantite Ore"),
    modifierType: "pickaxe"
  },
  "Runite Ore": {
    action: mine("Runite Ore"),
    modifierType: "pickaxe"
  },
  "Dragonite Ore": {
    action: mine("Dragonite Ore"),
    modifierType: "pickaxe"
  },
  "Raw Shrimp": {
    action: fish({fish: 'Raw Shrimp', chanceJunk: 25, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Sardine": {
    action: fish({fish: 'Raw Sardine', chanceJunk: 20, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Blowfish": {
    action: fish({fish: 'Raw Blowfish', chanceJunk: 28, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Herring": {
    action: fish({fish: 'Raw Herring', chanceJunk: 20, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Trout": {
    action: fish({fish: 'Raw Trout', chanceJunk: 29, chanceSpecial: 1}),
    modifierType: "fishingRod"
  },
  "Raw Poison Fish": {
    action: fish({fish: 'Raw Poison Fish', chanceJunk: 28, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Salmon": {
    action: fish({fish: 'Raw Salmon', chanceJunk: 29, chanceSpecial: 1}),
    modifierType: "fishingRod"
  },
  "Raw Lobster": {
    action: fish({fish: 'Raw Lobster', chanceJunk: 25, chanceSpecial: 0}),
    modifierType: "fishingRod",
  },
  "Raw Swordfish": {
    action: fish({fish: 'Raw Swordfish', chanceJunk: 29, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Anglerfish": {
    action: fish({fish: 'Raw Anglerfish', chanceJunk: 28, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Fanfish": {
    action: fish({fish: 'Raw Fanfish', chanceJunk: 29, chanceSpecial: 1}),
    modifierType: "fishingRod"
  },
  "Raw Crab": {
    action: fish({fish: 'Raw Crab', chanceJunk: 25, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Carp": {
    action: fish({fish: 'Raw Carp', chanceJunk: 20, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Shark": {
    action: fish({fish: 'Raw Shark', chanceJunk: 10, chanceSpecial: 0}),
    modifierType: "fishingRod"
  },
  "Raw Cave Fish": {
    action: fish({fish: 'Raw Cave Fish', chanceJunk: 28, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Manta Ray": {
    action: fish({fish: 'Raw Manta Ray', chanceJunk: 29, chanceSpecial: 2}),
    modifierType: "fishingRod"
  },
  "Raw Whale": {
    action: fish({fish: 'Raw Whale', chanceJunk: 10, chanceSpecial: 0}),
    modifierType: "fishingRod"
  }
};


export const pickpocketTable = {
  "Pickpocket Man": {
    action: pickpocket({perception: 210, maxHit: 22, maxGold: 100}),
    modifierType: "pickpocket"
  },
  "Pickpocket Goblin": {
    
  },
  "Pickpocket Marauder": {
    
  },
  "Pickpocket Merchant": {
    
  },
  "Pickpocket Farmer": {
    
  },
  "Pickpocket Chef": {
    
  },
  "Pickpocket Fisherman": {
    
  },
  "Pickpocket Lumberjack": {
    
  },
  "Pickpocket Miner": {
    
  },
  "Pickpocket Acolyte": {
    
  },
  "Pickpocket Wizard": {
    
  },
  "Pickpocket Knight": {
    
  },
}