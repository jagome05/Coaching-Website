import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"


export default function ResourceBox( {url, img }) {


  return (
    <>
      <div>
        <h1>Link</h1>
        <a href={url} target="_blank">
          <Card className="my-2">
            <CardImg
              alt="Card image cap"
              src={img}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card Title
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
            </CardBody>
          </Card>
        </a>
      </div>
    </>
  )
}