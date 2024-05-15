import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../css/styles.css";

function ModalComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <br />
      <Button variant="primary" onClick={handleShow}>
        Find out more about this site...
      </Button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>
            <p> This website was made using the MERN stack.</p>
          </strong>
          <ul>
            <li>
              <strong>MongoDB:</strong> is used to as the document database to
              pull and post reviews.
            </li>
            <li>
              <strong>Express.js:</strong> Node.js web framework.
            </li>
            <li>
              <strong>React.js:</strong> used to build the frontend of the
              website using JavaScript.
            </li>
            <li>
              <strong>Node.js:</strong> JavaScript web server.
            </li>
          </ul>
          <strong>
            <p> It also uses Spline and React Bootstrap.</p>
          </strong>
          <ul>
            <li>
              <strong>Spline:</strong> a 3D design software that can create
              interactive models.
            </li>
            {/* <li>
              <strong>GitHub's API: </strong>a REST API I used to pull and
              display repositories.
            </li> */}
            <li>
              <strong>React Bootstrap:</strong> a library that rebuilds
              Bootstrap components as true React components.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <br />
    </>
  );
}

export default ModalComponent;
