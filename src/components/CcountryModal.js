import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CountryDropdown from "./CountryDropDown";

function CountryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Unlock Exclusive Offers: Choose Your Country!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row align-items-center mb-4">
               <div className="col-3">Your Region:</div>
               <div className="col-4 p-0"><CountryDropdown /></div>
            </div>
            <p>Select your country to discover personalized deals and promotions tailored just for you. Experience the best of our services in your region!"</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">OK</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CountryModal;
