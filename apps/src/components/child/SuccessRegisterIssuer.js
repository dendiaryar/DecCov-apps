import React from "react";
import { Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

class SuccessRegisterIssuer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <Modal
        dialogClassName="custom-dialog"
        show={this.props.showModal}
        backdrop="static"
        keyboard={false}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton >
          <h3>Sukses registrasi issuer</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Issuer addresss</Form.Label>
              <Form.Text></Form.Text> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Nama institusi</Form.Label>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nomor pekerja kesehatan</Form.Label>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Kontak</Form.Label>
                <Form.Text></Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}

export default SuccessRegisterIssuer;
