import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';



export default function CityList () {

    console.log('init');
    let arr= [];
    if(localStorage.getItem('list')){
       arr = localStorage.getItem('list').split(',');
    }
    console.log(arr);

    function addItem(name){
        arr.push(name);
        localStorage.setItem('list', arr);
    }

    function fetchFrom(){
        api('Kyiv');
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
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
    }

    const [show, setShow] = useState(false);

    const ViewItem = () => setShow(false);
    const DelateItem = () => setShow(true);

    return (
        <ListGroup>
            <ListGroup.Item>
                <div> Kyiv </div>
                <ButtonToolbar>
                    <Button variant="info" onClick={addItem}>Views</Button>
                    <Button variant="danger" onClick={fetchFrom}>Delate</Button>
                </ButtonToolbar>
            </ListGroup.Item>
            <ListGroup.Item>
                <div> Lviv </div>
                <ButtonToolbar>
                    <Button variant="info" onClick={ViewItem} >Views</Button>
                    <Button variant="danger" onClick={DelateItem}>Delate</Button>
                </ButtonToolbar>
            </ListGroup.Item>
            <ListGroup.Item>
                <div> Kyiv </div>
                <ButtonToolbar>
                    <Button variant="info" onClick={ViewItem}>Views</Button>
                    <Button variant="danger" onClick={DelateItem}>Delate</Button>
                </ButtonToolbar>
            </ListGroup.Item>
        </ListGroup>
    );
}
