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

    const [show, setShow] = useState(false);

    const ViewItem = () => setShow(false);
    const DelateItem = () => setShow(true);
    
    return (
        <ListGroup>
            <ListGroup.Item>
                <div> Kyiv </div>
                <ButtonToolbar>
                    <Button variant="info" onClick={addItem}>Views</Button>
                    <Button variant="danger" onClick={DelateItem}>Delate</Button>
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
