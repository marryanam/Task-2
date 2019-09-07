import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';

 function CityList (props) {

    console.log('init');
    let arr= [];
    if(localStorage.getItem('list')){
       arr = localStorage.getItem('list').split(',');
    }

    function addItem(name){
        arr.push(name);
        localStorage.setItem('list', arr);
    }

    function fetchFrom(e){
        console.log(props);
        api(e.target.dataset.city);
    }

    const [name, setName] = useState("");
    function DelateItem(e){
        arr.forEach(function(item, index, object) {
          if (item === e.target.dataset.city) {
            object.splice(index, 1);
            console.log(arr);
          }
        });
        localStorage.setItem('list', arr);
        setName(e.target.dataset.city);
    }

    function api(name){
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial')
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

    function createListItems(){
        console.log(arr);
        arr.map(x => {
            return(
                <ListGroup.Item>
                    <div> Kyiv </div>
                    <ButtonToolbar>
                        <Button variant="info" onClick={addItem}>Views</Button>
                        <Button variant="danger" onClick={fetchFrom}>Delate</Button>
                    </ButtonToolbar>
                </ListGroup.Item>
            )
        });
    }

    return (
      <div>
        <h3>Aviable cities:</h3>
        <ListGroup>
            {arr.map(x => {
            return(
                <ListGroup.Item>
                    <div> {x} </div>
                    <ButtonToolbar>
                        <Button variant="info" onClick={fetchFrom} data-city={x}>Views</Button>
                        <Button variant="danger" onClick={DelateItem} data-city={x}>Delate</Button>
                    </ButtonToolbar>
                </ListGroup.Item>
            )
        })}
        </ListGroup>
      </div>
    );
}
React.memo(CityList);

const mapStateToProps = state => {
  return {
    test33Weather : state.weather
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    testWeather: function(data) {
      dispatch({type: "ADD_WEATHER", payload: data});
    }
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList)