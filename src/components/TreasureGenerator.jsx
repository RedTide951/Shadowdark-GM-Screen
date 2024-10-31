import React from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";

const TreasureGenerator = () => {
  const [mundaneTreasureResult, setMundaneTreasureResult] = useState(null);
  const [uniqueDetail, setUniqueDetail] = useState(null);
  const [zeroTreasureResult, setzeroTreasureResult] = useState(null);
  const [fourTreasureResult, setfourTreasureResult] = useState(null);
  const [sevenTreasureResult, setsevenTreasureResult] = useState(null);
  const [tenTreasureResult, settenTreasureResult] = useState(null);

  const handleMundaneTreasure = () => {
    const roll1 = Math.floor(Math.random() * 37);
    const roll2 = Math.floor(Math.random() * 20);

    const basicItems = [
      //length 37
      "Bastard Sword",
      "Club",
      "Crossbow",
      "Dagger",
      "Greataxe",
      "Greatsword",
      "Javelin",
      "Longbow",
      "Longsword",
      "Mace",
      "Shortbow",
      "Shortsword",
      "Spear",
      "Staff",
      "Warhammer",
      `Arrows (${Math.ceil(Math.random() * 20)})`,
      "Backpack",
      "Caltrops",
      `Coins (${Math.ceil(Math.random() * 100)})`,
      `Crossbow bolts (${Math.ceil(Math.random() * 20)})`,
      "Crowbar",
      "Flask or Bottle",
      "Flint and Steel",
      "Gem",
      "Grappling Hook",
      `Iron spikes (${Math.ceil(Math.random() * 10)})`,
      "Lantern",
      "Mirror",
      "Oil, flask",
      "Pole",
      `Rations (${Math.ceil(Math.random() * 3)})`,
      "Rope, 60'",
      "Torch",
      "Leather armor",
      "Chainmail",
      "Plate Mail",
      "Shield",
    ];

    const uniqueDetails = [
      "Forgery",
      "Misshapen",
      "Poorly constructed",
      "Blemished",
      "Worn smooth",
      "Sparkling clean",
      "Bite marks",
      "Burned",
      "Dusty",
      "Caked with dry mud",
      "Rare artist mark",
      "Repaired",
      "Chipped",
      "Specks of dried blood",
      "Unusual material",
      "Fragile",
      "Rusted/rotted",
      "Painted upon",
      "Carved with initials",
      "Historic/famous",
    ];

    setMundaneTreasureResult(basicItems[roll1]);
    setUniqueDetail(uniqueDetails[roll2]);
  };

  const handleZeroThreeTreasure = () => {
    const roll = Math.ceil(Math.random() * 100);

    const zeroThreeTreasure = [
      { range: "01", description: "Bent tin fork", value: "1 cp" },
      { range: "02-03", description: "Muddy torch", value: "2 cp" },
      { range: "04-05", description: "Bag of smooth pebbles", value: "2 cp" },
      {
        range: "06-07",
        description: "10 cp in a greasy pouch",
        value: "10 cp",
      },
      {
        range: "08-09",
        description: "Rusty lantern with shattered glass",
        value: "1 gp",
      },
      { range: "10-11", description: "Silver tooth", value: "1 gp" },
      { range: "12-13", description: "Dull dagger", value: "1 gp" },
      { range: "14-15", description: "Two empty glass vials", value: "6 gp" },
      { range: "16-17", description: "60 sp in a rotten boot", value: "60 sp" },
      {
        range: "18-19",
        description: "Cracked, handheld mirror",
        value: "8 gp",
      },
      { range: "20-21", description: "Chipped greataxe", value: "9 gp" },
      {
        range: "22-23",
        description: "10 gp in a moldy, wood box",
        value: "10 gp",
      },
      { range: "24-25", description: "Chip of an emerald", value: "10 gp" },
      {
        range: "26-27",
        description: "Longbow and bundle of 40 arrows",
        value: "10 gp",
      },
      {
        range: "28-29",
        description: "Dusty, leather armor dyed black",
        value: "10 gp",
      },
      { range: "30-31", description: "Scuffed, heavy shield", value: "10 gp" },
      {
        range: "32-33",
        description: "Simple, well-made bastard sword",
        value: "10 gp",
      },
      {
        range: "34-35",
        description: "12 gp in the pocket of a ripped cloak",
        value: "12 gp",
      },
      { range: "36-37", description: "Wavy-bladed greatsword", value: "12 gp" },
      {
        range: "38-39",
        description: "Pair of elf-forged shortswords",
        value: "14 gp",
      },
      { range: "40-41", description: "Golden bowl", value: "15 gp" },
      {
        range: "42-43",
        description: "Obsidian statuette of Shune the Vile",
        value: "15 gp",
      },
      { range: "44-45", description: "Undersized pearl", value: "20 gp" },
      {
        range: "46-47",
        description: "Jade-and-gold scarab pin",
        value: "20 gp",
      },
      {
        range: "48-49",
        description: "Bag of 10 silver spikes",
        value: "20 gp",
      },
      {
        range: "50-53",
        description: "Mithral locket with a painting of a halfling",
        value: "20 gp",
      },
      {
        range: "54-55",
        description: "Two finely forged dwarven shields",
        value: "20 gp",
      },
      {
        range: "56-57",
        description: "Pair of silvered daggers",
        value: "20 gp",
      },
      {
        range: "58-59",
        description: "Copper-and-gold mead tankard",
        value: "20 gp",
      },
      {
        range: "60-61",
        description: "Bundle of five red dragon scales",
        value: "25 gp",
      },
      {
        range: "62-63",
        description: "Light, warm cloak woven of spidersilk",
        value: "25 gp",
      },
      {
        range: "64-65",
        description: "Fine set of ivory game pieces",
        value: "25 gp",
      },
      {
        range: "66-67",
        description: "Half-finished suit of chainmail",
        value: "30 gp",
      },
      {
        range: "68-69",
        description: "Matched trio of warhammers",
        value: "30 gp",
      },
      { range: "70-71", description: "Fragment of a sapphire", value: "30 gp" },
      {
        range: "72-73",
        description: "Set of silk slippers and a robe",
        value: "35 gp",
      },
      {
        range: "74-75",
        description: "Silver-and-gold circlet",
        value: "40 gp",
      },
      {
        range: "76-77",
        description: "Radiant, polished pearl",
        value: "40 gp",
      },
      {
        range: "78-79",
        description: "Mithral shield etched with soaring dragons",
        value: "40 gp",
      },
      {
        range: "80-81",
        description: "Gold monkey idol with a ruby gripped in its teeth",
        value: "60 gp",
      },
      { range: "82-83", description: "Fine suit of chainmail", value: "60 gp" },
      { range: "84-85", description: "Cracked emerald", value: "60 gp" },
      { range: "86-87", description: "Two lustrous pearls", value: "80 gp" },
      { range: "88-89", description: "1st-tier spell scroll", value: "80 gp" },
      { range: "90-91", description: "Potion of Invisibility", value: "80 gp" },
      {
        range: "92-93",
        description: "Magic wand, 2nd-tier spell",
        value: "100 gp",
      },
      { range: "94-95", description: "Egg of The Cockatrice", value: "100 gp" },
      {
        range: "96-97",
        description: "+1 armor (benefit, curse)",
        value: "150 gp",
      },
      {
        range: "98-99",
        description: "Bag of Holding (virtue, flaw)",
        value: "150 gp",
      },
      {
        range: "00",
        description: "+1 magic weapon (benefit)",
        value: "200 gp",
      },
    ];

    for (const item of zeroThreeTreasure) {
      const rangeParts = item.range.split("-");
      const start = parseInt(rangeParts[0], 10);
      const end = rangeParts.length === 2 ? parseInt(rangeParts[1], 10) : start;
      if (roll >= start && roll <= end) {
        setzeroTreasureResult(item);
        return;
      }
    }
  };

  const handleFourSixTreasure = () => {
    const roll = Math.ceil(Math.random() * 100);

    const fourSixTreasure = [
      { range: "01", description: "Scattering of 3 cp", value: "3 cp" },
      {
        range: "02-03",
        description: "Wooden ring carved with knot pattern",
        value: "5 cp",
      },
      { range: "04-05", description: "Heavy iron key", value: "1 sp" },
      {
        range: "06-07",
        description: "Steel-banded wooden shield",
        value: "10 gp",
      },
      {
        range: "08-09",
        description: "Golden anchor necklace",
        value: "10 gp",
      },
      {
        range: "10-11",
        description: "Bag of 20 glass marbles",
        value: "5 sp each",
      },
      { range: "12-13", description: "Serrated greatsword", value: "12 gp" },
      {
        range: "14-15",
        description: "Three silver-tipped javelins",
        value: "4 gp each",
      },
      { range: "16-17", description: "Bag of rare spices", value: "15 gp" },
      {
        range: "18-19",
        description: "Mahogany pipe with ivory inlay",
        value: "25 gp",
      },
      {
        range: "20-21",
        description: "Set of polished bone dice",
        value: "25 gp",
      },
      {
        range: "22-23",
        description: "Copper flask etched with an owl",
        value: "30 gp",
      },
      {
        range: "24-25",
        description: "Eyepatch made of batwing leather",
        value: "30 gp",
      },
      {
        range: "26-27",
        description: "Leather bandoleer with 10 blue bottles",
        value: "3 gp each",
      },
      {
        range: "28-29",
        description: "Small oil painting of an elf woman",
        value: "35 gp",
      },
      { range: "30-31", description: "Opalescent pearl", value: "40 gp" },
      {
        range: "32-33",
        description: "Ceremonial, gold-capped warhammer",
        value: "40 gp",
      },
      {
        range: "34-35",
        description: "Silver ring with a miniature emerald",
        value: "40 gp",
      },
      {
        range: "36-37",
        description: "Tapestry of a unicorn in a forest glade",
        value: "45 gp",
      },
      {
        range: "38-39",
        description: "Goblin-made clockwork dragon doll",
        value: "45 gp",
      },
      {
        range: "40-41",
        description: "Half-complete suit of chainmail",
        value: "50 gp",
      },
      {
        range: "42-43",
        description: "Mace inlaid with gold holy symbols",
        value: "50 gp",
      },
      {
        range: "44-45",
        description: "Delicate, ancient vase of Myrkhosian make",
        value: "50 gp",
      },
      {
        range: "46-47",
        description: "Rare incense that is repulsive to undead",
        value: "50 gp",
      },
      {
        range: "48-49",
        description: "Minotaur hoof with a gold horseshoe",
        value: "50 gp",
      },
      {
        range: "50-53",
        description: "Longsword with a fiery pearl set in the pommel",
        value: "50 gp",
      },
      {
        range: "54-55",
        description: "Green crystal statuette of Memnon",
        value: "50 gp",
      },
      {
        range: "56-57",
        description: "Crimson holy symbol of Ramlaat with small ruby",
        value: "55 gp",
      },
      {
        range: "58-59",
        description: "Six black candles traced with gold runes",
        value: "10 gp each",
      },
      {
        range: "60-61",
        description: "Suit of dwarf-made chainmail",
        value: "60 gp",
      },
      {
        range: "62-63",
        description: "Dragonbone crossbow carved as roaring dragon",
        value: "60 gp",
      },
      {
        range: "64-65",
        description: "Half-complete suit of plate mail",
        value: "65 gp",
      },
      {
        range: "66-67",
        description: "Magnetic, iridescent chunk of meteorite",
        value: "70 gp",
      },
      {
        range: "68-69",
        description: "Full-length mirror set in gold frame",
        value: "70 gp",
      },
      {
        range: "70-71",
        description: "Large, green scarab encased in amber",
        value: "75 gp",
      },
      {
        range: "72-73",
        description: "Lute carved from ironwood with gold hardware",
        value: "75 gp",
      },
      {
        range: "74-75",
        description: "Ivory tusk carved with angels battling demons",
        value: "80 gp",
      },
      {
        range: "76-77",
        description: "Mithral shield inlaid with small, blue pearls",
        value: "80 gp",
      },
      {
        range: "78-79",
        description: "Two intact griffon eggs",
        value: "40 gp each",
      },
      {
        range: "80-81",
        description: "Suit of blackened-steel plate mail",
        value: "130 gp",
      },
      {
        range: "82-83",
        description: "2nd-tier spell scroll",
        value: "140 gp",
      },
      { range: "84-85", description: "Potion of Healing", value: "150 gp" },
      {
        range: "86-87",
        description: "3rd-tier spell scroll",
        value: "200 gp",
      },
      { range: "88-89", description: "Potion of Flying", value: "200 gp" },
      {
        range: "90-91",
        description: "Potion of Giant Strength",
        value: "200 gp",
      },
      {
        range: "92-93",
        description: "Magic wand, 3rd-tier spell (curse)",
        value: "250 gp",
      },
      {
        range: "94-95",
        description: "Ring of Feather Falling",
        value: "250 gp",
      },
      {
        range: "96-97",
        description: "+2 magic armor (benefit, curse)",
        value: "300 gp",
      },
      { range: "98-99", description: "Kytherian Cog", value: "300 gp" },
      {
        range: "00",
        description: "+2 magic weapon (benefit, curse)",
        value: "500 gp",
      },
    ];

    for (const item of fourSixTreasure) {
      const rangeParts = item.range.split("-");
      const start = parseInt(rangeParts[0], 10);
      const end = rangeParts.length === 2 ? parseInt(rangeParts[1], 10) : start;
      if (roll >= start && roll <= end) {
        setfourTreasureResult(item);
        return;
      }
    }
  };

  const handleSevenNineTreasure = () => {
    const roll = Math.ceil(Math.random() * 100);

    const sevenNineTreasureList = [
      { range: "01", description: "Broken glass shards", value: "2 cp" },
      { range: "02-03", description: "Pair of muddy boots", value: "5 sp" },
      {
        range: "04-05",
        description: "Rotting, leather pouch with 12 sp",
        value: "12 sp",
      },
      {
        range: "06-07",
        description: "Greatsword made of blue steel",
        value: "15 gp",
      },
      {
        range: "08-09",
        description: "Tall, thin mirror in a bronze frame",
        value: "20 gp",
      },
      {
        range: "10-11",
        description: "Pair of bastard swords with griffon pommels",
        value: "20 gp",
      },
      {
        range: "12-13",
        description: "Silver-and-gold statuette of an elf archer",
        value: "25 gp",
      },
      { range: "14-15", description: "Taxidermied smilodon", value: "30 gp" },
      {
        range: "16-17",
        description: "Cameo necklace of a human's profile",
        value: "30 gp",
      },
      {
        range: "18-19",
        description: "Ivory horn mug carved with drinking dwarves",
        value: "35 gp",
      },
      {
        range: "20-21",
        description: "Ironwood longbow engraved with silver leaves",
        value: "35 gp",
      },
      {
        range: "22-23",
        description: "Mahogany chess board with silver pieces",
        value: "40 gp",
      },
      {
        range: "24-25",
        description: "Mithral shield polished to a mirror-shine",
        value: "45 gp",
      },
      {
        range: "26-27",
        description: "Iridescent, spiralled unicorn horn",
        value: "50 gp",
      },
      {
        range: "28-29",
        description: "Basilisk egg in a silk bag",
        value: "55 gp",
      },
      {
        range: "30-31",
        description: "Gold holy symbol of Madeera with a large pearl",
        value: "60 gp",
      },
      {
        range: "32-33",
        description: "Red dragon mask with gold filigree",
        value: "65 gp",
      },
      {
        range: "34-35",
        description: "Gold censer with hooded, skeletal figures",
        value: "70 gp",
      },
      {
        range: "36-37",
        description: "Large, marble statue of an armored angel",
        value: "70 gp",
      },
      {
        range: "38-39",
        description: "Chainmail with several rows of gold links",
        value: "75 gp",
      },
      {
        range: "40-41",
        description: "Clutch of three green cockatrice eggs",
        value: "25 gp each",
      },
      {
        range: "42-43",
        description: "Oak lockbox filled to the brim with 80 gp",
        value: "80 gp",
      },
      {
        range: "44-45",
        description: "Blue silk robe embroidered with silver moons",
        value: "80 gp",
      },
      { range: "46-47", description: "Radiant giant pearl", value: "80 gp" },
      {
        range: "48-49",
        description: "Lantern made of intricate stained glass",
        value: "80 gp",
      },
      {
        range: "50-53",
        description: "Life-sized, jointed python of polished gold",
        value: "80 gp",
      },
      {
        range: "54-55",
        description: "Oil painting of a famous bard",
        value: "85 gp",
      },
      {
        range: "56-57",
        description: "Chunk of meteorite sculpted into a tentacled idol",
        value: "85 gp",
      },
      {
        range: "58-59",
        description: "Black silk surcoat embroidered with a gold lion",
        value: "90 gp",
      },
      {
        range: "60-61",
        description: "Pair of lustrous pearls in a silver lockbox",
        value: "90 gp",
      },
      {
        range: "62-63",
        description: "Gilded helm plumed with roc feathers",
        value: "95 gp",
      },
      {
        range: "64-65",
        description: "Hand-drawn bestiary of rare creatures",
        value: "95 gp",
      },
      {
        range: "66-67",
        description: "Wyvern hatchling encased in amber",
        value: "110 gp",
      },
      {
        range: "68-69",
        description: "Pendant with three lambent pearls",
        value: "120 gp",
      },
      {
        range: "70-71",
        description: "Life-sized, obsidian statue of a galloping horse",
        value: "120 gp",
      },
      {
        range: "72-73",
        description: "Glittering, faceted emerald",
        value: "120 gp",
      },
      { range: "74-75", description: "Potion of Healing", value: "150 gp" },
      { range: "76-77", description: "Potion of Polymorph", value: "200 gp" },
      {
        range: "78-79",
        description: "Magic wand, 3rd-tier spell",
        value: "250 gp",
      },
      { range: "80-81", description: "4th-tier spell scroll", value: "260 gp" },
      { range: "82-83", description: "Crystal Ball", value: "260 gp" },
      {
        range: "84-85",
        description: "Magic wand, 4th-tier spell (flaw)",
        value: "300 gp",
      },
      { range: "86-87", description: "Immovable Rod", value: "300 gp" },
      {
        range: "88-89",
        description: "+2 magic armor (benefit)",
        value: "300 gp",
      },
      {
        range: "90-91",
        description: "+2 mithral magic armor (benefit, virtue)",
        value: "320 gp",
      },
      {
        range: "92-93",
        description: "Scorpion idol, one Death's Sting blessing",
        value: "320 gp",
      },
      {
        range: "94-95",
        description: "Necromancy circle, one Ghostwalk blessing",
        value: "350 gp",
      },
      {
        range: "96-97",
        description: "Owl statue, one Arcane Eye blessing",
        value: "350 gp",
      },
      {
        range: "98-99",
        description: "+2 magic weapon (benefit, flaw)",
        value: "500 gp",
      },
      {
        range: "00",
        description: "+3 magic weapon (benefit, virtue)",
        value: "900 gp",
      },
    ];

    for (const item of sevenNineTreasureList) {
      const rangeParts = item.range.split("-");
      const start = parseInt(rangeParts[0], 10);
      const end = rangeParts.length === 2 ? parseInt(rangeParts[1], 10) : start;
      if (roll >= start && roll <= end) {
        setsevenTreasureResult(item);
        return;
      }
    }
  };

  const handleTenPlusTreasure = () => {
    const roll = Math.ceil(Math.random() * 100);

    const tenPlusTreasureList = [
      {
        range: "01",
        description: "Three tarnished silver plates",
        value: "5 sp each",
      },
      {
        range: "02-03",
        description: "Soapstone statuette of Gede with crumbled head",
        value: "3 gp",
      },
      {
        range: "04-05",
        description: "Half-empty cask of dwarvish honey mead",
        value: "5 gp",
      },
      {
        range: "06-07",
        description: "Damaged chainmail in need of repair",
        value: "50 gp",
      },
      {
        range: "08-09",
        description: "Five matching, ceremonial greatswords",
        value: "12 gp each",
      },
      {
        range: "10-11",
        description: "Chipped emerald worth half its value",
        value: "60 gp",
      },
      {
        range: "12-13",
        description: "Gold ring with a large, black pearl",
        value: "65 gp",
      },
      {
        range: "14-15",
        description: "Suit of crimson chainmail with matching shield",
        value: "70 gp",
      },
      {
        range: "16-17",
        description: "Giant pearl in the mouth of a gold-dipped bat",
        value: "100 gp",
      },
      {
        range: "18-19",
        description: "Stained glass pane of St. Terragnis vs. a dragon",
        value: "110 gp",
      },
      {
        range: "20-21",
        description: "Marble throne with giant pearl in headrest",
        value: "115 gp",
      },
      {
        range: "22-23",
        description: "Dagger with emerald in the pommel",
        value: "120 gp",
      },
      {
        range: "24-25",
        description: "A trio of pearls with blue and violet hues",
        value: "40 gp each",
      },
      {
        range: "26-27",
        description: "Suit of plate mail shaped to look like a minotaur",
        value: "130 gp",
      },
      {
        range: "28-29",
        description: "Suit of blue plate mail with crashing wave motif",
        value: "130 gp",
      },
      {
        range: "30-31",
        description: "Jade sculpture of a meditating elephant-man",
        value: "140 gp",
      },
      {
        range: "32-33",
        description: "Masterwork lute by realm's most famous luthier",
        value: "140 gp",
      },
      {
        range: "34-35",
        description: "Dragonbone greataxe with a ruby in pommel",
        value: "220 gp",
      },
      {
        range: "36-37",
        description: "Gold scarab dotted with miniature emeralds",
        value: "220 gp",
      },
      {
        range: "38-39",
        description: "Chest brimming with 230 gp",
        value: "230 gp",
      },
      {
        range: "40-41",
        description: "Silvered staff tipped with a ruby held in a claw",
        value: "220 gp",
      },
      {
        range: "42-43",
        description: "Only existing painting of an ancient king",
        value: "240 gp",
      },
      {
        range: "44-45",
        description: "Gold pendant bearing a teardrop-cut ruby",
        value: "240 gp",
      },
      {
        range: "46-47",
        description: "Giant, egg-shaped emerald",
        value: "240 gp",
      },
      {
        range: "48-49",
        description: "Silk robe with four pearls as buttons",
        value: "240 gp",
      },
      {
        range: "50-53",
        description: "Silver skull with a ruby in the eye",
        value: "240 gp",
      },
      {
        range: "54-55",
        description: "Mithral suit of elvish chainmail",
        value: "240 gp",
      },
      {
        range: "56-57",
        description: "Opalized giant conch shell with silver inlay",
        value: "250 gp",
      },
      {
        range: "58-59",
        description: "Gold sarcophagus inscribed with lost language",
        value: "250 gp",
      },
      {
        range: "60-61",
        description: "Chunk of meteorite wrapped around a ruby",
        value: "250 gp",
      },
      { range: "62-63", description: "4th-tier spell scroll", value: "260 gp" },
      {
        range: "64-65",
        description: "Velvet bag holding a lustrous sapphire",
        value: "280 gp",
      },
      { range: "66-67", description: "2 Potions of Healing", value: "300 gp" },
      {
        range: "68-69",
        description: "Silver torc with a sapphire and two pearls",
        value: "360 gp",
      },
      {
        range: "70-71",
        description: "Flawless, dazzling diamond",
        value: "360 gp",
      },
      {
        range: "72-73",
        description: "Taxidermied adult dragon",
        value: "360 gp",
      },
      { range: "74-75", description: "5th-tier spell scroll", value: "360 gp" },
      { range: "76-77", description: "Potion of Extirpation", value: "360 gp" },
      {
        range: "78-79",
        description: "Magic wand, 5th-tier spell (virtue, flaw)",
        value: "360 gp",
      },
      {
        range: "80-81",
        description: "Giant diamond, casts wish once without fail",
        value: "720 gp",
      },
      { range: "82-83", description: "Portable Hole", value: "720 gp" },
      {
        range: "84-85",
        description: "Ruby-eyed, gold idol, 3 Demonskin blessings",
        value: "840 gp",
      },
      {
        range: "86-87",
        description: "Scroll of the Covenant, 3 Divine Halo blessings",
        value: "840 gp",
      },
      {
        range: "88-89",
        description: "Brak's Cube of Perfection",
        value: "840 gp",
      },
      {
        range: "90-91",
        description: "Richly woven Flying Carpet",
        value: "840 gp",
      },
      {
        range: "92-93",
        description: "+3 mithral magic armor (benefit, virtue)",
        value: "900 gp",
      },
      {
        range: "94-95",
        description: "+3 magic weapon (2 benefits)",
        value: "900 gp",
      },
      {
        range: "96-97",
        description: "The fearsome Obsidian Witchknife",
        value: "1,200 gp",
      },
      {
        range: "98-99",
        description: "The hallowed Armor of Saint Terragnis",
        value: "1,200 gp",
      },
      {
        range: "00",
        description: "The mighty Staff of Ord",
        value: "1,200 gp",
      },
    ];

    for (const item of tenPlusTreasureList) {
      const rangeParts = item.range.split("-");
      const start = parseInt(rangeParts[0], 10);
      const end = rangeParts.length === 2 ? parseInt(rangeParts[1], 10) : start;
      if (roll >= start && roll <= end) {
        settenTreasureResult(item);
        return;
      }
    }
  };

  return (
    <Card className="cardClass">
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid size={12}>
          <Typography variant="h4" className="cardTitle">
            TREASURES
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button variant="contained" onClick={handleMundaneTreasure} fullWidth>
            Basic
          </Button>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay">
            {mundaneTreasureResult}, {uniqueDetail}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button
            variant="contained"
            onClick={handleZeroThreeTreasure}
            fullWidth
          >
            0-3 Level
          </Button>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay">
            {zeroTreasureResult
              ? `${zeroTreasureResult.description} (${zeroTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button variant="contained" onClick={handleFourSixTreasure} fullWidth>
            4-6 Level
          </Button>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay">
            {fourTreasureResult
              ? `${fourTreasureResult.description} (${fourTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button
            variant="contained"
            onClick={handleSevenNineTreasure}
            fullWidth
          >
            7-9 Level
          </Button>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay">
            {sevenTreasureResult
              ? `${sevenTreasureResult.description} (${sevenTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button variant="contained" onClick={handleTenPlusTreasure} fullWidth>
            10+ Level
          </Button>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay">
            {tenTreasureResult
              ? `${tenTreasureResult.description} (${tenTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TreasureGenerator;
