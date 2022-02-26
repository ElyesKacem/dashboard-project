import React from 'react';
import { styled,makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddIcon from '@mui/icons-material/Add';
const Card = () => {
  
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        // textAlign: 'center',
        padding:20,
        color: theme.palette.text.secondary,
        justifyContent:'center',
        alignItems:'center',
      }));

      const FlexContainer = styled(Paper)(({ theme }) => ({
        display:'flex',
        alignItems:'center',
        
      }));

     

    return ( <React.Fragment>
        
        <Item><Grid container>
    <h2> Foulen Fouleni</h2>
        <Grid item md={9} >
    

  <sections  style={{alignItems:'center',display:'flex'}}>
<CalendarTodayIcon/>&nbsp;<b>Age : </b> 23 ans 

  </sections>

  <sections  style={{alignItems:'center',display:'flex'}}>

  <ApartmentIcon/>&nbsp;<b>Adresse : </b> Demo Street 123, Demo City 04312, NJ

  </sections>

  <sections  style={{alignItems:'center',display:'flex'}}>

  <MailIcon/>&nbsp;<b>Email : </b> foulenfouleni@gmail.com

  </sections>

  <sections  style={{alignItems:'center',display:'flex'}}>

  <LocalPhoneIcon/>&nbsp;<b>Téléphon : </b> 52 290 239

  </sections>
  
   
  </Grid>
  <Grid item md={3} style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
      
      
      

  <Stack direction="row" spacing={2}>
      <Avatar src="user1-128x128.jpg" sx={{ width: 100, height: 100  }} ></Avatar>
    </Stack>
      
  </Grid>
  
  </Grid>

  <div style={{marginTop:'15px',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <Button variant="contained" style={{backgroundColor:'Orange',textTransform:'none'}} endIcon={<AddIcon />}>
        Voir plus
      </Button>

  </div>
        </Item>
    </React.Fragment> );
}
 
export default Card;