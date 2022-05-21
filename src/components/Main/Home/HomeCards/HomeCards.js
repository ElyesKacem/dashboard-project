import React from 'react';
import { Grid } from "@mui/material";
import { styled, makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const HomeCards = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: props.color,
    padding: theme.spacing(1),
    // textAlign: 'center',
    padding: 20,
    color: props.textColor,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));
  return (<React.Fragment>


    <Grid item md={6} sm={12} lg={3}>
      <Item>
        <div>
          <b style={{ fontSize: 30 }}>{props.value}</b><br />{props.info}
        </div>
        {props.icon}
      </Item>
    </Grid>


  </React.Fragment>);
}

export default HomeCards;