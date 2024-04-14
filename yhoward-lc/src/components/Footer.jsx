import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"

export default function Footer() {

  return (
    <>
      <div>
        <div>
          <h2>Subscribe to newsletter!</h2>
          <p>Enter Email: <input
            className="global-input"
            type="text"
            name="email"
            placeholder="Email address"
          // value={email}
          /><button>Send</button></p>
        </div>
        <div class="flex flex-row">
          <div class="basis-3/4">
            <h2>Contact Me</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="First">
                      First Name
                    </Label>
                    <Input
                      id="First"
                      name="First"
                      placeholder="First Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Last">
                      Last Name
                    </Label>
                    <Input
                      id="Last"
                      name="Last"
                      placeholder="Last Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">
                  Text Area
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                />
              </FormGroup>
              <Button>
                Send
              </Button>
            </Form>
          </div>
          <div class="basis-1/4">
            <h2>Social Media Links!</h2>
            <img class="w-1/2" src="https://t4.ftcdn.net/jpg/03/92/71/99/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg"></img>
          </div>
        </div>
      </div>
    </>
  )
}
