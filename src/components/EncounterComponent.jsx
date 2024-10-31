import React, { useState } from "react";
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

function EncounterComponent() {
  const [encounterResult, setEncounterResult] = useState("");
  const [startingDistance, setStartingDistance] = useState("");
  const [activity, setActivity] = useState("");
  const [reaction, setReaction] = useState("");
  const [moraleStatus, setMoraleStatus] = useState("");
  const [chaMod, setChaMod] = useState(0);
  const [wisMod, setwisMod] = useState(0);

  const handleEncounterCheck = () => {
    const roll = Math.ceil(Math.random() * 6);
    if (roll === 1) {
      setEncounterResult(` Encounter! (${roll})`);
    } else {
      setEncounterResult(`You are safe for now... (${roll}) `);
    }
  };

  const handleDistanceCheck = () => {
    const roll = Math.ceil(Math.random() * 6);
    const distances = ["Close", "Near", "Near", "Near", "Far", "Far"];
    setStartingDistance(` ${distances[roll - 1]} (${roll})`);
  };

  const handleActivityCheck = () => {
    const roll1 = Math.ceil(Math.random() * 6);
    const roll2 = Math.ceil(Math.random() * 6);
    const activities = [
      "Hunting",
      "Hunting",
      "Eating",
      "Eating",
      "Building/Nesting",
      "Building/Nesting",
      "Socializing/Playing",
      "Socializing/Playing",
      "Guarding",
      "Sleeping",
    ];
    setActivity(` ${activities[roll1 + roll2 - 2]} (${roll1} + ${roll2})`);
  };

  const handleReactionCheck = () => {
    const roll1 = Math.ceil(Math.random() * 6);
    const roll2 = Math.ceil(Math.random() * 6);
    const total = roll1 + roll2 + chaMod;
    let attitude;
    if (total <= 6) attitude = "Hostile";
    else if (total <= 8) attitude = "Suspicious";
    else if (total === 9) attitude = "Neutral";
    else if (total <= 11) attitude = "Curious";
    else attitude = "Friendly";

    setReaction(` ${attitude} (${roll1} + ${roll2} + ${chaMod})`);
  };

  const handleCHAChange = (event) => {
    setChaMod(event.target.value);
  };

  const handleMoraleCheck = () => {
    const roll = Math.ceil(Math.random() * 20);
    const total = roll + wisMod;
    let morale;
    if (total < 15) morale = "Morale Broken!";
    else morale = "Enemy prevails!";

    setMoraleStatus(` ${morale} (${roll} + ${wisMod})`);
  };

  const handleWisChange = (event) => {
    setwisMod(event.target.value);
  };

  return (
    <Card className="cardClass">
      <Grid container spacing={1} alignItems="center">
        <Grid size={12}>
          <Typography variant="h4" className="cardTitle">
            ENCOUNTERS
          </Typography>
        </Grid>
        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleEncounterCheck}
            className="button"
          >
            Encounter
          </Button>
        </Grid>
        <Grid size={8}>
          <Typography className="resultDisplay">{encounterResult}</Typography>
        </Grid>

        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleDistanceCheck}
            className="button"
            style={{ width: "100%", height: "100%" }}
          >
            Distance
          </Button>
        </Grid>
        <Grid size={8}>
          <Typography className="resultDisplay">{startingDistance}</Typography>
        </Grid>

        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleActivityCheck}
            className="button"
            style={{ width: "100%" }}
          >
            Activity
          </Button>
        </Grid>
        <Grid size={8}>
          <div>
            <Typography className="resultDisplay">{activity}</Typography>
          </div>
        </Grid>
        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleReactionCheck}
            className="button"
          >
            Reaction
          </Button>
        </Grid>
        <Grid size={2}>
          <FormControl className="button">
            <Select
              value={chaMod}
              onChange={handleCHAChange}
              displayEmpty
              style={{ height: "2em" }}
            >
              {Array.from({ length: 9 }, (_, i) => i - 4).map((mod) => (
                <MenuItem key={mod} value={mod}>
                  {mod >= 0 ? `+${mod}` : mod}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <Typography className="resultDisplay">{reaction}</Typography>
        </Grid>
        <Grid size={4}>
          <Button
            variant="contained"
            onClick={handleMoraleCheck}
            className="button"
          >
            Morale
          </Button>
        </Grid>
        <Grid size={2}>
          <FormControl className="button">
            <Select
              value={wisMod}
              onChange={handleWisChange}
              displayEmpty
              style={{ height: "2em" }}
            >
              {Array.from({ length: 9 }, (_, i) => i - 4).map((mod) => (
                <MenuItem key={mod} value={mod}>
                  {mod >= 0 ? `+${mod}` : mod}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <Typography className="resultDisplay">{moraleStatus}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default EncounterComponent;
