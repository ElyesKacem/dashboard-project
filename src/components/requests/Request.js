import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '1200px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

function Request(props) {
    const data = useLocation().state;
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
    console.log(data)
  return (
    <div>

        <div>
            <label> Nom Client: </label>
            <span>{data.name}</span>
        </div>
        <div>
            <label>Adresse: </label>
            <span>{data.address}</span>
        </div>
        <div>
            <label> Telephone:</label>
            <span>{data.phone}</span>
        </div>
        <div>
            <label> Date de reservation: </label>
            <span>{data.date}</span>
        </div>



    <map>
    {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker position={{ lat: center.lat, lng: center.lng }} />
          </GoogleMap>
      ) : <></>}
    </map>

    </div>



  )
}

export default Request