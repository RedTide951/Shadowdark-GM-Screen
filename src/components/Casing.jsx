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
import InitiativeList from "./InitiativeList";
import { Draggable } from "react-beautiful-dnd";
import DraggableList from "./DraggableList";

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
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <EncounterComponent />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <NPCGenerator />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TimerComponent />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TreasureGenerator />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <MonsterGenerator />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DraggableList />
        </Grid>
      </Grid>
    </Box>
  );
}
