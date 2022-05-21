import { Grid } from '@mui/material';
import React from 'react'
import { LineChart } from '../../Chart/LineChart/LineChart';
import HomeCards from './HomeCards/HomeCards';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Home = () => {

    return (<React.Fragment>

        <Grid container spacing={2}>
            <HomeCards color="#17a2b8" icon={<InsertEmoticonIcon fontSize='large' />} info="Visiteur" value="64" textColor="white" />
            <HomeCards color="#28a745" icon={<MonetizationOnOutlinedIcon fontSize='large' />} info="Retenu" value="150 DT" textColor="white" />
            <HomeCards color="#ffc107" icon={<VpnKeyIcon fontSize='large' />} info="Inscription" value="7" textColor="black" />
            <HomeCards color="#dc3545" icon={<DriveFolderUploadIcon fontSize='large' />} info="Demandes" value="15" textColor="white" />
        </Grid>
        <Grid container style={{ marginTop: 30 }}>
            <Grid md={6} sm={12} >
                <LineChart></LineChart>

            </Grid>
            <Grid md={6} sm={12}>
                <Calendar></Calendar>
            </Grid>

        </Grid>


    </React.Fragment>);
}

export default Home;