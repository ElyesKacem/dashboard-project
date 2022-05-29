import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { color } from '@mui/system';
import { Rowing } from '@mui/icons-material';


const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Request(props) {
  const id = useLocation().state;
  const [Request,setRequest]=React.useState(null);
  console.log(id);
  React.useEffect(()=>{
      fetch("http://localhost:8000/requests/"+id)
          .then(res =>{
            return res.json();
          })
          .then((data)=>{
            console.log("data",data);
            setRequest(data)
          })
  },[]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBhXchlpCEolAoO4Pe4mTV82pnC1t3X4eo"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  console.log(Request)
  const [Team, setTeam] = React.useState(0);
  var status
  const handleChange = (event) => {
    setTeam(event.target.value);
    if (event.target.value==0) {
      status="new";
    }
    else
      status = "pending";
    const obj = {
      id:Request.id,
      name:Request.name,
      address:Request.address,
      phone:Request.phone,
      status: status,
      team: event.target.value,
      coordinates:{
          lat: -3.745,
          lng: -38.523
      }
    };
    console.log(obj)
    fetch("http://localhost:8000/requests/" + Request.id, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.reload()
  };
  return (
    <div>
      {Request &&
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  Nom Client:
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {Request.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Date de reservation:
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {Request.date}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Telephone:
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {Request.phone}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Adresse:
                </Typography>
                <Typography gutterBottom variant="body2">
                  {Request.address}
                </Typography>
              </Grid>
              <Box sx={{ minWidth: 120 }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                  { /*<Typography gutterBottom variant="subtitle1" component="div"> Equipe de travail</Typography>*/}
                  <InputLabel id="demo-simple-select-filled-label" variant="standard" >Equipe de travail</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={Request.team}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>foxtrot</MenuItem>
                    <MenuItem value={2}>alpha</MenuItem>
                    <MenuItem value={3}>echo</MenuItem>
                  </Select>
                  <FormHelperText>Affecter une Equipe de travail</FormHelperText>
                </FormControl>
              </Box>
              <Grid item>
                {
                  (() => {
                    switch (Request.status) {
                      case "new":
                        return <Alert variant="filled" severity="info">
                          nouveau
                        </Alert>
                      case 'pending':
                        return <Alert variant="filled" severity="warning">
                          en attente
                        </Alert>
                      case 'done':
                        return <Alert variant="filled" severity="success">
                          complete
                        </Alert>
                      case 'canceled':
                        return <Alert variant="filled" severity="error">
                          annule
                        </Alert>
                      default:
                        return <Alert variant="filled" severity="info">
                          else
                        </Alert>
                    }
                  }
                  )()
                }
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>
              <Typography variant="h5" component="div">
                Emplacement:
              </Typography>
            </Grid>
            <map>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={Request.coordinates}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  { /* Child components, such as markers, info windows, etc. */}
                  <Marker position={{ lat: Request.coordinates.lat, lng: Request.coordinates.lng }} />
                </GoogleMap>
              ) : <></>}
            </map>
          </Grid>
        </Grid>
      </Paper>
    }
    </div>






  )
}

export default Request