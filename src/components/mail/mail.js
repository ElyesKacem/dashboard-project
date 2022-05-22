import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
function Mail() {
    const data = useLocation().state;
  return (
    <Paper
        
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1000,
          maxHeight: 2000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
            <Grid item xs={12} sm container direction='column'>
                <Grid item xs container direction='row' spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                        Nom Client:
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        {data.name}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                        Date d'email:
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        {data.date}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs container direction='row' spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                        Email Client:
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        {data.email}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs container direction='row' spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                        Message:
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        {data.text}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
      </Paper>
  )
}

export default Mail