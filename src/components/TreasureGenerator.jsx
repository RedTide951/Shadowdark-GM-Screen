import React from "react";
import { useState } from "react";
import {
  Button,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";

const TreasureGenerator = () => {
  const [treasureResult, setTreasureResult] = useState(null);

  const handleTreasureRoll = () => {
    const roll = Math.ceil(Math.random() * 100);

    const treasureItems = [
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

    for (const item of treasureItems) {
      const rangeParts = item.range.split("-");
      const start = parseInt(rangeParts[0], 10);
      const end = rangeParts.length === 2 ? parseInt(rangeParts[1], 10) : start;
      if (roll >= start && roll <= end) {
        setTreasureResult(item);
        return; // Stop the loop once the item is found
      }
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center">
            Treasure Roll
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleTreasureRoll} fullWidth>
            Roll for Treasure
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {treasureResult
              ? `${treasureResult.description} - ${treasureResult.value}`
              : "Click the button to roll for a treasure!"}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TreasureGenerator;
