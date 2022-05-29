import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { lightGreen } from '@mui/material/colors';
import { useLocation } from "react-router-dom";

import ReponseMail from '../Dialog/ReponseMail';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';

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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <Stack direction="row" spacing={2}>

                        <Avatar sx={{ bgcolor: lightGreen[500], height: 50, width: 50, fontSize: 30, textTransform: 'capitalize' }}>{data.name[0]}</Avatar>
                        <br />
                        <div>

                            <b>
                                {data.name}

                            </b>
                            <br /> {'<'}   {data.email} {'>'}


                        </div>
                    </Stack>
                </div>




                <div>

                    <div>
                        <b>
                            At :
                        </b>
                        {data.date}
                    </div>
                </div>




            </div>
            <br />
            <Divider />


            <Container container spacing={2}>
                <br />
                <br />
                {data.text}

                <br />
                <br />

                <br />
                <br />
                <ReponseMail title='Répondre' style={{ backgroundColor: '#33bc33', color: 'white', position: 'absolute', right: 30, bottom: 180 }} variant="outlined" />
            </Container>
        </Paper>
    )
}

export default Mail