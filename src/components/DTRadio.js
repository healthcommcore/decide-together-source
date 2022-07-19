import React from 'react';
import Form from 'react-bootstrap/Form';

const DTRadio = ({ label, name, choices, onCheck }) => {
  return (
    <Form.Group>
      <Form.Label>{ label }</Form.Label>
      { choices.map( (choice, i) => {
        return (
          <Form.Check
            key={ i }
            type="radio"
            name={ name }
            label={ typeof choice === 'object' ? choice.label : choice }
            id={ typeof choice === 'object' ? choice.name : choice }
          />
        );
      })}
    </Form.Group>
  );
}

export default DTRadio;

