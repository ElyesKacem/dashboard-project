import React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Calendar } from 'react-calendar';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    // textAlign: 'center',
    padding: 20,
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
}));

const Calendarm = () => {
    return (<React.Fragment>
        <Item>
            <Calendar></Calendar>
        </Item>
    </React.Fragment>);
}

export default Calendarm;