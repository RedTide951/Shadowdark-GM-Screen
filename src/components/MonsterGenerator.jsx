import React from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const MonsterGenerator = () => {
  const [playerLevel, setPlayerLevel] = useState(null);

  const handleRandomMonster = () => {};

  return (
    <Card className="cardClass">
      <Grid container spacing={1} style={{ height: "100%", width: "100%" }}>
        <Grid size={12}>
          <Typography variant="h4" className="cardTitle">
            MONSTER GENERATOR
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MonsterGenerator;
