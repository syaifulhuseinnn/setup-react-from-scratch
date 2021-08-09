import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function AddContact({
  showModal,
  handleCloseModal,
  newContact,
  handleNewContact,
  handleSubmitNewContact,
}) {
  return (
    <Modal show={showModal} onHide={handleCloseModal} fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitNewContact}>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={newContact.fullname}
              name="fullname"
              onChange={handleNewContact}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="John"
              value={newContact.nickname}
              name="nickname"
              onChange={handleNewContact}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone-number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="08123456789"
              value={newContact.phone_number}
              name="phone_number"
              onChange={handleNewContact}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitNewContact}>
          Save Contact
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddContact.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  newContact: PropTypes.object.isRequired,
  handleNewContact: PropTypes.func.isRequired,
  handleSubmitNewContact: PropTypes.func.isRequired,
};
