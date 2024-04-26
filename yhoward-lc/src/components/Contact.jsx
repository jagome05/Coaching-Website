import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button, Collapse, CardBody, Card } from "reactstrap"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(first, last, from, message)
      console.log(data)
      alert("Message successfully sent!")
    })
    .catch((error)=>{
      console.log(error)
      alert("error sending messsage")
    })
  }

  return (
    <>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Contact Me!
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <div class="basis-3/4 sticky">
              <h2>Contact Me</h2>
              <Form onSubmit={handleSend}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="first">
                        First Name
                      </Label>
                      <Input
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
                      <Label for="last">
                        Last Name
                      </Label>
                      <Input
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
                  <Label for="from">
                    Email
                  </Label>
                  <Input
                    id="from"
                    name="from"
                    placeholder="Email Address"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">
                    Message
                  </Label>
                  <Input
                    id="message"
                    name="message"
                    type="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </>
  )
}

// ? ref
//https://medium.com/@emmilindsey/react-router-hashlink-vs-link-e1e7a81bac1d