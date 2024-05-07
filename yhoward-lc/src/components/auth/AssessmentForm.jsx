import { Form, FormGroup, Label, Input, FormText } from "reactstrap"

export default function AssessmentForm() {
  //todo make sure they have to submit before hitting next
  //todo save form answer to profile
  //todo update required items

  return (
    <>
      <div>
        {/* <Form> */}

          <FormGroup>
            <Label for="exampleEmail">
              Assessment Form
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="exampleNumber">
              Number
            </Label>
            <Input
              // required
              autoFocus
              id="exampleNumber"
              name="number"
              placeholder="number placeholder"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">
              Date
            </Label>
            <Input
              // required
              id="exampleDate"
              name="date"
              placeholder="date placeholder"
              type="date"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleColor">
              Color
            </Label>
            <Input
              id="exampleColor"
              name="color"
              placeholder="color placeholder"
              type="color"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">
              Select
            </Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
            >
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">
              Select Multiple
            </Label>
            <Input
              id="exampleSelectMulti"
              multiple
              name="selectMulti"
              type="select"
            >
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
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
          <FormGroup>
            <Label for="exampleFile">
              File
            </Label>
            <Input
              id="exampleFile"
              name="file"
              type="file"
            />
            <FormText>
              This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleRange">
              Range
            </Label>
            <Input
              id="exampleRange"
              name="range"
              type="range"
            />
          </FormGroup>
          <FormGroup check>
            <Input type="radio" />
            {' '}Option one is this and that—be sure to
            <Label check>
              include why it‘s great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>
              Check me out
            </Label>
          </FormGroup>
        {/* </Form> */}
      </div>
    </>
  )
}

// todo OR use google forms https://docs.google.com/forms/d/1AXbeHVgFBAumBz3IY2AhmKQZPvE-98Gl8u74YX9cMDI/edit?pli=1

//? ref
// https://blog.logrocket.com/best-practices-react-iframes/