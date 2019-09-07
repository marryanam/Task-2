import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';

function CurrentWeather(props) {

    function getLocation(){
        Geocode.setApiKey("AIzaSyBHv7iI3_z0gzKy83nXBgO0Dn9zDVGQs6A");
        Geocode.enableDebug();
        Geocode.fromLatLng(props.coords.latitude, props.coords.longitude).then(
          response => {
            const address = response.results[0].formatted_address;           
          },
          error => {
            console.error(error);
          }
        );
    }

	  function api(lt, ln){
        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lt+'&lon='+ln+'&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial')
          .then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              response.json().then(function(data) {
                console.log(data);
                const { testWeather } = props;
                    testWeather(data);
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
    }

    function onClickHendler(e){
        getLocation();
        api(props.coords.latitude, props.coords.longitude);
    }

  	return (
      	<Button variant="success" onClick={onClickHendler} className="add_btn">
        	Get weather ay current location
      	</Button>
  	);
}
 
const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    testWeather: function(data) {
      dispatch({type: "ADD_WEATHER", payload: data});
    }
  }
}
 
export default 

geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(connect(
      null,
      mapDispatchToProps
    )(CurrentWeather)
  );