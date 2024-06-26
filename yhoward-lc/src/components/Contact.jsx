import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert
} from "reactstrap";

export default function Contact() {

  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const toggle = () => (
    setModal(!modal),
    onDismiss()
);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  async function handleSend(event) {
    event.preventDefault();

    //*fetch POST req from controller
    await fetch("http://localhost:4000/api/contactMe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first,
        last,
        from,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(first, last, from, message);
        console.log(data);
        setVisible(true)
        // alert("Message successfully sent!");
      })
      .catch((error) => {
        console.log(error);
        alert("error sending messsage");
      });
  }


return (
  <>
    <button onClick={toggle} className="text-white text-lg">
      Contact
    </button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
      <Row>
        <Col xs="6">Contact Me!</Col>
        <Col xs="6">
        <Alert color="success" isOpen={visible}>
        Success!
      </Alert>
        </Col>
      </Row>
      </ModalHeader>
      <ModalBody>
        <div class="basis-3/4 sticky">
          <Form onSubmit={handleSend}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="first">First Name</Label>
                  <Input
                  required
                    id="first"
                    name="first"
                    placeholder="First Name"
                    type="text"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="last">Last Name</Label>
                  <Input
                  required
                    id="last"
                    name="last"
                    placeholder="Last Name"
                    type="text"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="from">Email</Label>
              <Input
              required
                id="from"
                name="from"
                placeholder="Email Address"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
              required
                id="message"
                name="message"
                type="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Send</Button>
          </Form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </>
);
}

// ? ref
//https://medium.com/@emmilindsey/react-router-hashlink-vs-link-e1e7a81bac1d
