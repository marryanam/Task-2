import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import { Provider } from "react-redux";


function FormModal(props) {

	console.log('init');
    let arr= [];
    if(localStorage.getItem('list')){
       arr = localStorage.getItem('list').split(',');
    }

    function addItem(name){
        arr.push(name);
        localStorage.setItem('list', arr);
        props.dispatch({
          type: 'ADD_WEATHER',
          payload: name
        })
    }
    
    function submitFrom(){
    	addItem(name);
    }

  	const [show, setShow] = useState(false);
  	const [name, setName] = useState("");

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

  	return (
    	<>
      	<Button variant="success" onClick={handleShow} className="add_btn">
        	Add city
      	</Button>

	      <Modal show={show} onHide={handleClose}>
	        	<Modal.Header closeButton>
	          		<Modal.Title>Add a new city</Modal.Title>
        		</Modal.Header>
		        <Modal.Body>
					<Form onSubmit={submitFrom}>
						<Form.Group controlId="formBasicEmail">
						    <Form.Label>City</Form.Label>
					    	<Form.Control type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Enter city" />
						</Form.Group>
						<Button variant="success" type="submit">
						    Add
						</Button>
					</Form>
		        </Modal.Body>
	      	</Modal>
    	</>
  	);
}
export default connect( state=> state)(FormModal);