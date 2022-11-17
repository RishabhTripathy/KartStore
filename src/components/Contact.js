import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
  return (
    <>
      <div id="contact">
        <h2
          style={{
            color: "Black",
            // textAlign: "center",
            // padding: "2rem 0",
            fontSize: "3.5rem",
          }}
        >
          Contact Us
        </h2>
        <Form id="form">
       
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="" placeholder="Enter you Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter you Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter you Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="phone" placeholder="Enter your contact no." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
