import { useState } from "react"

//custom Hook fxn // --> has one parameter called steps that will be an array of the diff pages
export default function useMultistepForm(steps) {

  //Step index for different step pages
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  //TODO make sure I incorporate a "must finish" before going to the next section

  //function for a next button
  function next() {
    setCurrentStepIndex(i => {
      // this makes sure we are within bounds at last step
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  //function for a back button
  function back() {
    setCurrentStepIndex(i => {
      // this makes sure we are within bounds at first step
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back
  }
}

//? ref
//https://www.youtube.com/watch?v=uDCBSnWkuH0 //--> main multistep form with custom hook vid
// https://react.dev/learn/reusing-logic-with-custom-hooks //--> react doc about custom hooks
// todo OR use with Docusign https://developers.docusign.com/docs/web-forms-api/web-forms-101/
