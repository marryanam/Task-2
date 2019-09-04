import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


export default function WeatherCard() {
	return (
		<Card style={{ width: '100%' }}>
			<Card.Img variant="top" src="./img/logo.svg" />
			 <Card.Body>
			    <Card.Title>City name</Card.Title>
			    <Card.Text>
			      	Please sign up and use our fast and easy-to-work weather APIs for free. Look at our monthly subscriptions for more options than Free account can provide you. Read How to start first and enjoy using our powerful weather APIs.
			    </Card.Text>
			</Card.Body>
		</Card>
	)
}