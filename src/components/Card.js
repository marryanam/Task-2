import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';


export default function WeatherCard(props) {

	return (
		<div>
        	<h3>Details:</h3>
			<Card style={{ width: '100%' }}>
				 <Card.Body>
				    <Card.Title>{props.list.name}</Card.Title>
				    <Card.Text>
				      	{JSON.stringify(props.list)}
				    </Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}

