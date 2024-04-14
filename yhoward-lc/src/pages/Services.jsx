import React from "react";
import FAQ from "../components/FAQ"
import {
  Card, CardBody, CardTitle, CardText, Button
} from "reactstrap"

export default function Services() {


  return (
    <>
      <div class="text-center">
        <h2>Services</h2>
        <img class="bg-cover" src="https://t3.ftcdn.net/jpg/05/22/92/86/360_F_522928616_xqzObEMWOQs25Aiz4iubcgLndw2jGsih.jpg"></img>
        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5">
              Service 1
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5">
              Service 2
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Button color="primary">
          Book Now!
        </Button>
        <br></br>
        <FAQ />
      </div>
    </>
  )
}
