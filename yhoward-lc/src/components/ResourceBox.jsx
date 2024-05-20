import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"


export default function ResourceBox( {url, img, title }) {

  //TODO edit card heights

  return (
    <>
      <div className="font-basker">
        <br></br>
        <a href={url} target="_blank">
          <Card className="my-2">
            <CardImg
              alt="Card image cap"
              src={img}
              top
              width="100%"
              height="100%"
              />
            <CardBody>
              <h3><strong>{title}</strong></h3>
            </CardBody>
          </Card>
        </a>
      </div>
    </>
  )
}