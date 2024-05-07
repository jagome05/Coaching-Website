
export default function MultiStepForm() {


  return (
    <>
      <div>
        
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