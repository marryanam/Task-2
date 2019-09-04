import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function FormModal() {
  	const [show, setShow] = useState(false);

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
					<Form>
						<Form.Group controlId="formBasicEmail">
						    <Form.Label>City</Form.Label>
					    	<Form.Control type="text" placeholder="Enter city" />
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
