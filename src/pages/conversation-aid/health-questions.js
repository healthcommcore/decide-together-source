import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { arrayFrom } from '../../helpers/utilities';

const HealthQuestions = () => {
  const ageArray = arrayFrom(75,89);
  ageArray.push("90+");
  console.log(ageArray);
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>What is your age?</Form.Label>
          <Form.Select aria-label="Select your age">
          { ageArray.map( (num, i) => {
            return (
              <option key={ i } value={ num }>{ num }</option>
            );
          })}
          </Form.Select>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default HealthQuestions;
