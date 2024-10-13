import React, { useState } from "react";
import { Button, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";

function NPCGenerator() {
  const [npc, setNpc] = useState({
    name: "",
    ancestry: "",
    alignment: "",
    age: "",
    wealth: "",
    appearance: "",
    secret: "",
  });

  const generateNPC = () => {
    const name = generateName();
    const ancestry = rollAncestry();
    const alignment = rollAlignment();
    const age = rollAge();
    const wealth = rollWealth();
    const { appearance, secret } = rollAppearanceAndSecret();
    setNpc({ name, ancestry, alignment, age, wealth, appearance, secret });
  };

  const nameParts = [
    ["Ir", "an", "l", "int"],
    ["Van", "ish", "n", "us"],
    ["Cyr", "tos", "pil", "ios"],
    ["Den", "zar", "g", "el"],
    ["Cor", "ven", "z", "inne"],
    ["Hil", "sen", "bor", "os"],
    ["Sal", "win", "t", "ian"],
    ["Bri", "on", "c", "ius"],
    ["Mar", "en", "ar", "iol"],
    ["Gar", "lin", "q", "an"],
    ["Tin", "sor", "v", "isk"],
    ["Vor", "oc", "iv", "erg"],
    ["Nel", "vyn", "ov", "ent"],
    ["Ri", "al", "b", "ial"],
    ["Quor", "osh", "den", "ant"],
    ["Bal", "er", "k", "iel"],
    ["Mur", "in", "s", "onne"],
    ["Par", "el", "r", "org"],
    ["Tor", "un", "jen", "enne"],
    ["Lem", "nar", "w", "ynne"],
  ];

  const generateName = () => {
    const part1 = nameParts[Math.floor(Math.random() * nameParts.length)];
    const part2 = nameParts[Math.floor(Math.random() * nameParts.length)];
    const part3 = nameParts[Math.floor(Math.random() * nameParts.length)];
    return part1[0] + part2[1] + part3[2] + part3[3];
  };

  // Ancestry roll (d12)
  const rollAncestry = () => {
    const roll = Math.ceil(Math.random() * 12);
    if (roll <= 4) return "Human";
    if (roll <= 6) return "Elf";
    if (roll <= 8) return "Dwarf";
    if (roll <= 10) return "Halfling";
    if (roll === 11) return "Half-orc";
    return "Goblin";
  };

  // Alignment roll (d6)
  const rollAlignment = () => {
    const roll = Math.ceil(Math.random() * 6);
    if (roll <= 3) return "Lawful";
    if (roll === 4) return "Neutral";
    return "Chaotic";
  };

  // Age roll (d8)
  const rollAge = () => {
    const roll = Math.ceil(Math.random() * 8);
    if (roll === 1) return "Child";
    if (roll === 2) return "Adolescent";
    if (roll <= 4) return "Adult";
    if (roll <= 6) return "Middle-Aged";
    if (roll === 7) return "Elderly";
    return "Ancient";
  };

  // Wealth roll (d6)
  const rollWealth = () => {
    const roll = Math.ceil(Math.random() * 6);
    if (roll === 1) return "Poor";
    if (roll <= 3) return "Standard";
    if (roll <= 5) return "Wealthy";
    return "Extravagant";
  };

  // Appearance and Secret roll (d20)
  const rollAppearanceAndSecret = () => {
    const roll = Math.ceil(Math.random() * 20);
    const qualities = [
      { appearance: "Balding", does: "Spits", secret: "Hiding a fugitive" },
      {
        appearance: "Stocky build",
        does: "Always eating",
        secret: "Adores baby animals",
      },
      {
        appearance: "Very tall",
        does: "Moves quickly",
        secret: "Obsessed with fire",
      },
      {
        appearance: "Beauty mark",
        does: "Card tricks",
        secret: "In a religious cult",
      },
      { appearance: "One eye", does: "Prays aloud", secret: "Is a half-demon" },
      {
        appearance: "Braided hair",
        does: "Writes in diary",
        secret: "Was a wizard's apprentice",
      },
      {
        appearance: "Muscular",
        does: "Apologetic",
        secret: "Needlessly picks pockets",
      },
      {
        appearance: "White hair",
        does: "Slaps backs",
        secret: "Has a false identity",
      },
      {
        appearance: "Scar on face",
        does: "Drops things",
        secret: "Afraid of storms",
      },
      {
        appearance: "Willowy build",
        does: "Swears oaths",
        secret: "Has functional gills",
      },
      {
        appearance: "Sweaty",
        does: "Makes puns",
        secret: "In deep gambling debt",
      },
      {
        appearance: "Cleft chin",
        does: "Rare accent",
        secret: "Works as a smuggler",
      },
      { appearance: "Frail", does: "Easily spooked", secret: "Is a werewolf" },
      {
        appearance: "Big eyebrows",
        does: "Forgetful",
        secret: "Can actually smell lies",
      },
      {
        appearance: "Tattooed",
        does: "Speaks quietly",
        secret: "Cast out of wealthy family",
      },
      {
        appearance: "Floppy hat",
        does: "Twitches",
        secret: "In love with a bartender",
      },
      {
        appearance: "Gold tooth",
        does: "Moves slowly",
        secret: "Left the Thieves' Guild",
      },
      {
        appearance: "Six fingers",
        does: "Speaks loudly",
        secret: "Best friends with a prince",
      },
      { appearance: "Very short", does: "Swaggers", secret: "Retired crawler" },
      {
        appearance: "Large nose",
        does: "Smokes pipe",
        secret: "Has a pet basilisk",
      },
    ];
    return qualities[roll - 1];
  };

  return (
    <Card className="cardClass">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">RANDOM NPC</Typography>
        </Grid>

        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Name
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.name}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Ancestry
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.ancestry}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Alignment
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.alignment}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Age
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.age}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Wealth
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.wealth}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Appearance
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="resultDisplay" variant="result">
            {npc.appearance}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Typography className="attributeDisplay" variant="result">
            Secret
          </Typography>
        </Grid>
        <Grid size={9}>
          <Typography className="resultDisplay" variant="result">
            {npc.secret}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Button variant="contained" className="button" onClick={generateNPC}>
            Generate
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default NPCGenerator;
