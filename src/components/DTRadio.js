import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const DTRadio = ({ label, name, choices, followup, saveResponse }) => {

  const [isVisible, setVisibility] = useState(false);

  const evaluate = (e) => {
    const resp = e.target.id;
    const name = e.target.name;
    if (followup) {
      followup.response === resp ? setVisibility(true) : setVisibility(false);
    }
    saveResponse(name, resp);
  }

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
              onClick={ evaluate }
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
            name={ `${ name }_${ followup.response }` }
            saveResponse={ saveResponse }
          />
        </div>
      )}
    </>
  );
}

DTRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  choices: PropTypes.array,
  followup: PropTypes.object,
  followup: PropTypes.func
}

export default DTRadio;
