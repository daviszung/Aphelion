import { cutWood, mine } from "./redux/userSlice";

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
    action: fish("Raw Shrimp"),
    modifierType: "fishingRod"
  }
};