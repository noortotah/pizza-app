import React from 'react';
import { Button, Modal } from "react-bootstrap";

const UIModal = (props) => {
    console.log(props)
    const {onOk, ...newProps} = {...props};
    return (
        
        <Modal
          {...newProps}
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
            <Button variant="primary" onClick={props.onOk} >Success</Button>
          </Modal.Footer>
        </Modal>
      );
}
 
export default React.memo(UIModal);