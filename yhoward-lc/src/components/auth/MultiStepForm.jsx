// import { useState } from 'react';
// import useMultistepForm from "./useMultiStep";
import slideVid from "../../static/Merge videos project.mp4"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardImgOverlay, CardImg, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

export default function MultiStepForm() {

    // const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([])


  return (
    <>
      <div className="">

        <h1>Practice with image texts</h1>
      <div className="grid grid-cols-3 gap-5 items-stretch">

        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Link
    </CardLink>
  </CardBody>
</Card>

<div className="">
<Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
    </CardImgOverlay>
  </Card>
  </div>

      <div>
        <Card>
        <Row>
          <Col>
          <CardImg 
                alt="Card image cap"
                src="https://picsum.photos/500"
                width="100%"/>
          </Col>

          <Col>
          <CardBody>
            <CardTitle tag="h5">Hello</CardTitle>
            <CardSubtitle tag="h6">Card Subtitle</CardSubtitle>
            <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ratione laudantium provident repellendus. Numquam maxime temporibus cum, quasi culpa inventore!</CardText>
          </CardBody>
          </Col>
        </Row>

        </Card>
      </div>

</div>


      </div>

      <div>
        <h1>Practice with file uploads</h1>
          <form action="Localhost:4000/api/upload" enctype="multipart/form-data" method="post">
            <div class="form-group">
              <input type="file" class="form-control-file" name="file"/>
              <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers"/>
              <input type="submit" value="Get me the stats!" class="btn btn-default"/>            
            </div>
          </form>
          
      </div>

      <div className="">
        <h1 className="z-2">Practice with moving videos/gifs slideshow</h1>
        <video autoPlay loop muted className="">
          <source src={slideVid} type="video/mp4"/>
        </video>
      </div>

    </>
  )
}


//! wait to see if Yvonne figures out how consent form and assessment are
// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom"
// import useMultistepForm from "./useMultiStep";
// import Register from "./Register";
// import AssessmentForm from "./AssessmentForm";
// import ConsentForm from "./ConsentForm";
// import ReCAPTCHA from "react-google-recaptcha";
// import PracticePDF from "./PracticePDF";
// import Docuseal from "./Docuseal";

// export default function MultiStepForm() {
  
  
//   //TODO update to make sure cannot submit until all fields on pages are completed
//   const [data, setData] = useState({
//     // TODO pass props to children comp
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   })

//   function updateField(fields) {
//     setData(prev => {
//       return { ...prev, ...fields }
//     })
//   }
  
//   function onSubmit(e) {
//     e.preventDefault()
//     if (!isLastStep) return next()
//     alert("Successful Account Creation")
//   }

//   // calls custom hook and pulls functions and logic in array //--> props 
//   const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
//     useMultistepForm([<Register {...data} updateField={updateField}/>, <AssessmentForm {...data} updateField={updateField} />, <ConsentForm {...data} updateField={updateField} />, <PracticePDF {...data} updateField={updateField} />, <Docuseal {...data} updateField={updateField} />])
//   //TODO <Register {...data}

//   const recaptchaRef = useRef();
//   const reCAPTCHA = process.env.REACT_APP_SITE_KEY;

//   return (
//     <>
//       <div class="p-5">
//         {/* //TODO form onSubmit={onSubmit} */}
//         <form onSubmit={onSubmit}>

//           <div class="p-5 border-2 border-black border-solid relative">

//             {/* //todo maybe work on animated progress bar */}
//             <div class="absolute top-0 right-0 p-3">
//               {currentStepIndex + 1} / {steps.length}
//             </div>

//             <h1>{step}</h1>

//               {isLastStep && 
//                 <ReCAPTCHA
//                 className="reCaptcha"
//                 sitekey={reCAPTCHA}
//                 ref={recaptchaRef} />
//               }
//             <div class="flex gap-3 justify-end">

//               {!isFirstStep &&
//                 <button type="button" onClick={back} class="global-button">Back</button>}

//               {!isLastStep ? (
//                 <button className="global-button">Next</button>
//               ) : (
//                 <button className="global-button" type="submit"> Register </button>
//               )
//               }
//             </div>

//           </div>
//         </form>

//         <div className="text-5xl">
//           Already a member?{" "}
//           <Link className="link-button" to="/users">
//             <strong>Login</strong>
//           </Link>
//         </div>

//       </div>
//     </>
//   )
// }

//?ref
//https://www.youtube.com/watch?v=QSBc8bABwE0 //--> how to build multistep hook with react
//https://react.dev/reference/react/useState#examples-objects // --> useState info