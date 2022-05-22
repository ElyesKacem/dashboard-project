import { useEffect, useState } from 'react';
// import './App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);


const data = {
    // Title: { text: 'hi', display: 'true' },
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            '#E38627',
            '#C13C37',
            '#6A2135'
        ]
    },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
};
function GCircleChart(props) {
    // const [data, setData] = useState({
    //     datasets: [{
    //         label: 'Utilisateurs',
    //         data: [10, 20, 30, 20],
    //         backgroundColor: [
    //             'Red',
    //             '#E38627',
    //             '#C13C37',
    //             '#6A2135'
    //         ]
    //     },
    //     ],
    //     labels: [

    //         'Android',
    //         'Iphone',
    //         'Windows',
    //         'Linux'
    //     ],
    // });

    return (
        <div className="App" style={{ width: '30%', height: '30%', margin: 'auto', paddingBottom: 82 }}>
            <h1>{props.title}</h1>
            <Doughnut data={props.data} />
        </div>
    );
}

export default GCircleChart;