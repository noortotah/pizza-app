import React from 'react';
import { Button, Modal } from "react-bootstrap";

const UIModal = (props) => {
    
    return (
        <Modal
          {...props}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="primary" onClick={props.onSuccess} >Success</Button>
          </Modal.Footer>
        </Modal>
      );
}
 
export default React.memo(UIModal);