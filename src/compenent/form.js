import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample() {
  return (
    <Form style={{margin:"300px 400px"}}>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="put your name here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Nationality</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Brésilien</option>
            <option>Argentin</option>
            <option>Israélien</option>
            <option>Marocain</option>
            <option>France</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="check this"
          />
        </Form.Group>
        <Button onClick={aff} type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}
function aff()
{
    var nm=document.getElementById('disabledTextInput').value;
    var n=document.getElementById('disabledSelect').value;
    alert(`hello ${nm} you are ${n}`);
}
export default FormDisabledExample;