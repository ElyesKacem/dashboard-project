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
import { styled, makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import GCircleChart from './CircleChart/GeeksCircleChart/GeeksCircleChart';
import { WaveChart } from './WaveChart/WaveChart';
const Home = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        // textAlign: 'center',
        padding: 20,
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    }));

    const userData = {
        // Title: { text: 'hi', display: 'true' },
        datasets: [{
            label: 'Utilisateurs',
            data: [10, 20, 30, 20],
            backgroundColor: [
                'Red',
                '#E38627',
                '#C13C37',
                '#6A2135'
            ]
        },
        ],
        labels: [

            'Android',
            'Iphone',
            'Windows',
            'Linux'
        ],
    };


    const stockData = {
        // Title: { text: 'hi', display: 'true' },
        datasets: [{
            label: 'Utilisateurs',
            data: [10, 20, 30],
            backgroundColor: [
                'blue',
                'red',
                'green'
            ]
        },
        ],
        labels: [
            'Eau',
            'Essence',
            'Materielle'
        ],
    };


    return (<React.Fragment>
        <h1>Dashboard</h1>
        <Grid container spacing={2}>
            <HomeCards color="#17a2b8" icon={<InsertEmoticonIcon fontSize='large' />} info="Visiteur" value="64" textColor="white" />
            <HomeCards color="#28a745" icon={<MonetizationOnOutlinedIcon fontSize='large' />} info="Retenu" value="150 DT" textColor="white" />
            <HomeCards color="#ffc107" icon={<VpnKeyIcon fontSize='large' />} info="Inscription" value="7" textColor="black" />
            <HomeCards color="#dc3545" icon={<DriveFolderUploadIcon fontSize='large' />} info="Demandes" value="15" textColor="white" />
        </Grid>
        <Grid container style={{ marginTop: 30 }}>
            <Grid md={6} sm={12} >
                <LineChart></LineChart>
                <br />
                <Item>
                    <GCircleChart title="Stock" data={stockData}></GCircleChart>

                </Item>

            </Grid>
            <Grid md={6} sm={12}>
                {/* <Calendar ></Calendar>
                <Calendarm></Calendarm> */}

                <Item>

                    <WaveChart></WaveChart>
                </Item>
                <br />
                <Item>
                    <GCircleChart title="Utilisateurs" data={userData}></GCircleChart>

                </Item>
                {/* <CircleChart></CircleChart> */}
            </Grid>

        </Grid>


    </React.Fragment>);
}

export default Home;