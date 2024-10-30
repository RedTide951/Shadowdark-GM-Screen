import React, { useState, useEffect } from "react";
import { Button, Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function TimerComponent() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(60 * 60);

  const [lightMishapResult, setlightMishapResult] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(60 * 60);
  };

  const handleIncrease = () => {
    setTime(time + 300);
  };

  const handleDecrease = () => {
    setTime(time - 300);
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const handleLightMishap = () => {
    const lightSourceEffects = [
      "Dud. The light source (even a magical one) goes out and needs to be replaced or recast.",
      "Fire. The light source (even a magical one) flares and burns your hand. Take 1 damage. DC 18 DEX or drop it.",
      "Air. A rogue wind or pocket of thin air blows through. DC 15 DEX or the flames go out.",
      "Water. A sudden rain shower or dripping ceiling hits the light source. DC 15 DEX or the flames go out.",
      "Earth. Falling rocks, mud, leaves, or ash cover the light source. DC 12 DEX to protect it.",
      "Spark. If the light source is open flame, it sparks and catches on 1d4 flammable objects within close. DC 12 DEX to extinguish each one.",
    ];

    const roll = Math.floor(Math.random() * 6);

    setlightMishapResult(lightSourceEffects[roll]);
    return;
  };

  return (
    <Card className="cardClass">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4" className="cardTitle">
            LIGHT
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button
            variant="contained"
            className="button"
            onClick={handleLightMishap}
          >
            Mishap!
          </Button>
        </Grid>
        <Grid size={9} sx={{ minHeight: "5em" }}>
          <Typography className="resultDisplay">
            {lightMishapResult ? `${lightMishapResult}` : ""}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: "40px",
              backgroundColor: "lightgray",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${(time / (60 * 60)) * 100}%`,
                backgroundColor: "green",
                transition: "width 1s linear",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                lineHeight: "180%",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {Math.floor(time / 60)}:
              {time % 60 < 10 ? `0${time % 60}` : time % 60}
            </Typography>
          </Box>
        </Grid>
        <Grid size={2}>
          <Button
            variant="contained"
            className="button"
            color="primary"
            onClick={handleStart}
            disabled={isActive}
          >
            Start
          </Button>
        </Grid>
        <Grid size={2}>
          <Button
            variant="contained"
            className="button"
            color="secondary"
            onClick={handleStop}
            disabled={!isActive}
          >
            Stop
          </Button>
        </Grid>
        <Grid size={2}>
          <Button variant="contained" className="button" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
        <Grid size={3}>
          <Button
            variant="outlined"
            className="button"
            color="success"
            onClick={handleIncrease}
          >
            +5
          </Button>
        </Grid>
        <Grid size={3}>
          <Button
            variant="outlined"
            className="button"
            onClick={handleDecrease}
            color="error"
          >
            -5
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TimerComponent;
