import React, { useState, useEffect } from "react";
import { Button, Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function TimerComponent() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(60 * 60); // 60 minutes in seconds

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
  const offset = ((60 * 60 - time) / (60 * 60)) * circumference;

  return (
    <Card className="cardClass">
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        style={{ height: "100%" }}
      >
        <Grid size={12}>
          <Typography variant="h4">TIMER</Typography>
        </Grid>
        <Grid size={12}>
          <svg width="150" height="150">
            <circle
              stroke="lightgray"
              fill="transparent"
              strokeWidth="10"
              cx="75"
              cy="75"
              r={radius}
            />
            <circle
              stroke="#3f51b5"
              fill="transparent"
              strokeWidth="10"
              cx="75"
              cy="75"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 75 75)"
            />
            <text x="50%" y="50%" dy=".3em" textAnchor="middle" fill="white">
              {Math.floor(time / 60)}:
              {time % 60 < 10 ? `0${time % 60}` : time % 60}
            </text>
          </svg>
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
