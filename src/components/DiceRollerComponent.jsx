import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState, useRef, useEffect } from "react";
import { TextField, Button, List, ListItem } from '@mui/material';


const DiceRollerComponent = () => {
  const [input, setInput] = useState('');
  const [rolls, setRolls] = useState([]);
  const bottomListRef = useRef(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const rollDice = (input) => {
    const pattern = /(\d*)d(\d+)/;
    const match = input.match(pattern);
    if (!match) return 0;

    const [, count = 1, faces] = match;
    let total = 0;
    for (let i = 0; i < parseInt(count, 10); i++) {
      total += Math.floor(Math.random() * parseInt(faces, 10)) + 1;
    }
    return total;
  };



  const handleRoll = () => {
    const result = rollDice(input);
    const newRoll = `${input}: ${result}`;
    setRolls([...rolls, newRoll]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleRoll();
    }
  };

  useEffect(() => {
    if (bottomListRef.current) {
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [rolls]); // Triggered whenever rolls update


  return (
    <Card className="cardClass">
      <Grid container spacing={1} style={{
        height: "100%", width: "100%",
      }}
        alignItems="center">
        <Grid size={12}>
          <Typography variant="h4" className="cardTitle">
            DICE ROLLER
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ maxHeight: 150, minHeight: 150, overflow: 'auto' }}>
            <List sx={{ '& .MuiListItem-root': { py: 0.5, my: 0 } }}>
              {rolls.map((roll, index) => (
                <ListItem key={index}>{roll}</ListItem>
              ))}
              <div ref={bottomListRef} />
            </List>
          </Box>
        </Grid>
        <Grid size={8}>
          <TextField
            variant="outlined"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="2d6, 3d10, d20 etc..."
            sx={{
              width: "100%",
              display: "flex"
            }}
          />
        </Grid>
        <Grid size={4}>
          <Button variant="contained" color="primary" onClick={handleRoll} className="button">
            Roll
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DiceRollerComponent;
