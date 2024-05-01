import React from "react";
import useMultistepForm from "./useMultiStep";
import Register from "./Register";
import AssessmentForm from "./AssessmentForm";
import ConsentForm from "./ConsentForm";

export default function MultiStepForm() {
  // calls custom hook and pulls functions and logic in array //--> props 
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([<Register/>, <AssessmentForm />, <ConsentForm />])
  //TODO update to make sure cannot submit until all pages are completed
  

  return (
    <>
      <div class="p-5">
        <form>
          <div class="p-5 border-2 border-black border-solid relative">
            <div class="absolute top-0 right-0 p-3">
              {currentStepIndex + 1} / {steps.length}
            </div>
            <h1>{step}</h1>
            <div class="flex gap-3 justify-end">
              {!isFirstStep && <button type="button" onClick={back} class="border-2 border-black bg-gray-300 px-2">Back</button>}
              {!isLastStep && <button type="button" onClick={next} class="border-2 border-black bg-gray-300 px-2">Next</button>}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}