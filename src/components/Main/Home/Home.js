import { Grid } from '@mui/material';
import React from 'react'
import { LineChart } from '../../Chart/LineChart/LineChart';
import HomeCards from './HomeCards/HomeCards';
const Home = () => {

    return ( <React.Fragment>
       
    <Grid container spacing={2}>
       <HomeCards/>
       <HomeCards/>
       <HomeCards/>
       <HomeCards/>        
    </Grid>
    <Grid container spacing={2} style={{marginTop:30}}>
        <Grid md={6} sm={12}>
        <LineChart></LineChart>
        </Grid>
        <Grid md={6} sm={12}>
        
        </Grid>

    </Grid>   
    
    
    </React.Fragment> );
}
 
export default Home;