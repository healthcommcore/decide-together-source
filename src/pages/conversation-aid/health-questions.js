import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { arrayFrom } from '../../helpers/utilities';
import { dbQueryer } from '../../services/dbqueryer';

const HealthQuestions = () => {
  let results;

  useEffect( () => {
    const getResults = async () => {
      results = await dbQueryer.getResults('annual_screening');
    }
    getResults();
  }, [results]);

  const ageArray = arrayFrom(75,89);
  ageArray.push("90+");

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
