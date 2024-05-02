import React, { useState } from "react";
import useMultistepForm from "./useMultiStep";
import Register from "./Register";
import AssessmentForm from "./AssessmentForm";
import ConsentForm from "./ConsentForm";

export default function MultiStepForm() {
  // calls custom hook and pulls functions and logic in array //--> props 
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = 
  useMultistepForm([<Register/>, <AssessmentForm />, <ConsentForm />])
  //TODO <Register {...data}

  //TODO update to make sure cannot submit until all fields on pages are completed
  /* const [data, setData] = useState({
  TODO pass props to children comp
  firstName
  lastName
  email
  password
  */

  // function onSubmit(e) {
  //   e.preventDefault()
  //   next()
  // }

  return (
    <>
      <div class="p-5">
        {/* //TODO form onSubmit={onSubmit} */}
        <form>

          <div class="p-5 border-2 border-black border-solid relative">

           {/* //todo maybe work on animated progress bar */}
            <div class="absolute top-0 right-0 p-3">
              {currentStepIndex + 1} / {steps.length}
            </div>

            <h1>{step}</h1>

            <div class="flex gap-3 justify-end">
              {!isFirstStep && 
              <button type="button" onClick={back} class="border-2 border-black bg-gray-300 px-2">Back</button>}
              
              {!isLastStep && 
              //TODO type="submit" erase onClick
              <button type="button" onClick={next} class="border-2 border-black bg-gray-300 px-2">Next</button>}
            </div>

          </div>

        </form>
      </div>
    </>
  )
}

//?ref
//https://www.youtube.com/watch?v=QSBc8bABwE0 //--> how to build multistep hook with react
//https://react.dev/reference/react/useState#examples-objects // --> useState info