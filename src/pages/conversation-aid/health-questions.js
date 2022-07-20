import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { arrayFrom } from '../../helpers/utilities';
import DTRadio from '../../components/DTRadio';
import questionLabels from '../../data/health-question-labels';

const HealthQuestions = () => {
  let results;

  const ageArray = arrayFrom(75,89);
  ageArray.push("90+");

  const modalityQuestion = questionLabels.radios.pop();

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>{ questionLabels.select.label }</Form.Label>
          <Form.Select aria-label="Select your age">
          { ageArray.map( (num, i) => {
            return (
              <option key={ i } value={ num }>{ num }</option>
            );
          })}
          </Form.Select>
        </Form.Group>
        { questionLabels.radios.map( (radio, idx) => {
          return (
            <DTRadio
              key={ idx }
              label={ radio.label }
              name={ radio.name }
              choices={ radio.choices }
              followup={ radio.followup }
            />
          );
        })}
      </Form>
    </Container>
  );
}

export default HealthQuestions;
