import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const DTRadio = ({ label, name, choices, followup, onCheck }) => {

  const [isVisible, setVisibility] = useState(false);
  return (
    <>
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
    { followup && (
      <div className={ isVisible ? 'd-block' : 'd-none' }>
        <DTRadio
          label={ followup.label }
          choices={ followup.choices }
        />
      </div>
    )}
  </>
  );
}

export default DTRadio;

