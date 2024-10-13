import React, { useState } from "react";
import { Button, Typography, Box, FormControl, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function EncounterComponent() {
    const [encounterResult, setEncounterResult] = useState("");
    const [startingDistance, setStartingDistance] = useState("");
    const [activity, setActivity] = useState("");
    const [reaction, setReaction] = useState("");
    const [chaMod, setChaMod] = useState(0);

    const handleEncounterCheck = () => {
        const roll = Math.ceil(Math.random() * 6);
        if (roll === 1) {
            setEncounterResult(`${roll}. Encounter!`);
        } else {
            setEncounterResult(`${roll}. You are safe for now...`);
        }
    };

    const handleDistanceCheck = () => {
        const roll = Math.ceil(Math.random() * 6);
        const distances = ["Close", "Near", "Near", "Near", "Far", "Far"];
        setStartingDistance(`${roll}. ${distances[roll - 1]}`);
    };

    const handleActivityCheck = () => {
        const roll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const activities = [
            'Hunting',
            'Hunting',
            'Eating',
            'Eating',
            'Building/Nesting',
            'Building/Nesting',
            'Socializing/Playing',
            'Socializing/Playing',
            'Guarding',
            'Sleeping'
        ];
        setActivity(`${roll}. ${activities[roll - 2]}`);
    };

    const handleReactionCheck = () => {
        const roll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const total = roll + chaMod;
        let attitude;
        if (total <= 6) attitude = 'Hostile';
        else if (total <= 8) attitude = 'Suspicious';
        else if (total === 9) attitude = 'Neutral';
        else if (total <= 11) attitude = 'Curious';
        else attitude = 'Friendly';

        setReaction(`${roll} + CHA = ${total}. ${attitude}`);
    };

    const handleCHAChange = (event) => {
        setChaMod(event.target.value);
    };


    return (
        <Card className="cardClass">
            <Grid container spacing={1}>
                <Grid size={12}>
                    <Typography variant="h4">ENCOUNTERS</Typography>
                </Grid>
                <Grid size={6}>
                    <Button variant="contained" onClick={handleEncounterCheck} className="button" >
                        Encounter (d6)
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Typography className="resultDisplay" variant="result">{encounterResult}</Typography>
                </Grid>

                <Grid size={6}>
                    <Button variant="contained" onClick={handleDistanceCheck} className="button">
                        Distance (d6)
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Typography className="resultDisplay" variant="result">{startingDistance}</Typography>
                </Grid>

                <Grid size={6}>
                    <Button variant="contained" onClick={handleActivityCheck} className="button">
                        Activity (2d6)
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Typography className="resultDisplay" variant="result">{activity}</Typography>
                </Grid>
                <Grid size={4}>
                    <Button variant="contained" onClick={handleReactionCheck} className="button">
                        Reaction (2d6+CHA)
                    </Button>
                </Grid>
                <Grid size={2}>
                    <FormControl className="button">
                        <Select
                            value={chaMod}
                            onChange={handleCHAChange}
                            displayEmpty
                        >
                            {Array.from({ length: 9 }, (_, i) => i - 4).map(mod => (
                                <MenuItem key={mod} value={mod}>
                                    {mod >= 0 ? `+${mod}` : mod}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={6}>
                    <Typography className="resultDisplay" variant="result">
                        {reaction}
                    </Typography>

                </Grid>

            </Grid>
        </Card >
    );
}

export default EncounterComponent;
