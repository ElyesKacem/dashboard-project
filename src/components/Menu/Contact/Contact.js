import { Grid } from '@mui/material';
import React from 'react';


import Card from './Card/Card';

const Contact = () => {

  


    return ( <React.Fragment>

      <h1>Contacts</h1>
        <Grid container spacing={2}>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
  <Grid item md={6} sm={12} lg={4} >
    <Card></Card>
  </Grid>
</Grid>
    </React.Fragment> );
}
 
export default Contact;