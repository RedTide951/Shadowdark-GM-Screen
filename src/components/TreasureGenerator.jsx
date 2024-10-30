import React from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";

const TreasureGenerator = () => {
  const [zeroTreasureResult, setzeroTreasureResult] = useState(null);
  const [fourTreasureResult, setfourTreasureResult] = useState(null);

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
          <Typography variant="h4" textAlign="center" className="cardTitle">
            TREASURES
          </Typography>
        </Grid>
        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleZeroThreeTreasure}
            fullWidth
          >
            0-3 Treasures
          </Button>
        </Grid>
        <Grid size={8}>
          <Typography className="resultDisplay" variant="result">
            {zeroTreasureResult
              ? `${zeroTreasureResult.description} (${zeroTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
        <Grid size={4}>
          <Button variant="contained" onClick={handleFourSixTreasure} fullWidth>
            4-6 Treasures
          </Button>
        </Grid>
        <Grid size={8}>
          <Typography className="resultDisplay" variant="result">
            {fourTreasureResult
              ? `${fourTreasureResult.description} (${fourTreasureResult.value})`
              : ""}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TreasureGenerator;
