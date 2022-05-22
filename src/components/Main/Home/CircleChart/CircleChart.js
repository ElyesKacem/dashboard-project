import React from 'react';

import { PieChart } from 'react-minimal-pie-chart';
import { styled, makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Pie } from 'react-chartjs-2';
const CircleChart = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        // textAlign: 'center',
        padding: 20,
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    }));

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    // const data = [
    //     { name: 'Geeksforgeeks', students: 400 },
    //     { name: 'Technical scripter', students: 700 },
    //     { name: 'Geek-i-knack', students: 200 },
    //     { name: 'Geek-o-mania', students: 1000 }
    // ];
    return (
        <PieChart
            radius='30'
            labelPosition='50'

            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}
        />

    );
}

export default CircleChart;