import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import EncounterComponent from "./EncounterComponent";
import NPCGenerator from "./NPCGenerator";
import TimerComponent from "./TimerComponent";
import TrapGenerator from "./TrapGenerator";
import TreasureGenerator from "./TreasureGenerator";
import MonsterGenerator from "./MonsterGenerator";
import PlotGenerator from "./PlotGenerator";
import DiceRollerComponent from "./DiceRollerComponent";
import InitiativeTracker from "./InitiativeTracker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} m={2}>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <EncounterComponent />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <NPCGenerator />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <TimerComponent />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <TreasureGenerator />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <InitiativeTracker />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <DiceRollerComponent />
        </Grid>
      </Grid>
    </Box>
  );
}
