import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { arrayFrom } from '../../helpers/utilities';
import DTRadio from '../../components/DTRadio';
import { getResponses, setResponses } from '../../state/responsesSlice';
import questionLabels from '../../data/health-question-labels';
import usePrepareResponse from '../../hooks/usePrepareResponse';

const HealthQuestions = () => {
  const dispatch = useDispatch();
  const prepareResponse = usePrepareResponse('isfollowup');
  const ageArray = arrayFrom(75,89);
  ageArray.push("90+");

  const modalityQuestion = questionLabels.radios.pop();

  const saveResponse = (e) => {
    const { name, value } = prepareResponse(e);
    dispatch( setResponses({ name, value}) );
  }

  return (
    <Container>
      <Form>
  {/* Select list for age */}
        <Form.Group>
          <Form.Label>{ questionLabels.select.label }</Form.Label>
          <Form.Select aria-label="Select your age" onChange={ saveResponse } name="age">
            <option value="0">--Select your age--</option>
          { ageArray.map( (num, i) => {
            return (
              <option key={ i } value={ num }>{ num }</option>
            );
          })}
          </Form.Select>
        </Form.Group>
  {/* Mult choice questions 2-5 */}
        { questionLabels.radios.map( (radio, idx) => {
          return (
            <DTRadio
              key={ idx }
              label={ radio.label }
              name={ radio.name }
              choices={ radio.choices }
              followup={ radio.followup }
              saveResponse={ saveResponse }
            />
          );
        })}
  {/* Modality mult choice question extracted for special styling */}
        <DTRadio
          label={ modalityQuestion.label }
          name={ modalityQuestion.name }
          choices={ modalityQuestion.choices }
          saveResponse={ saveResponse }
        />
      </Form>
    </Container>
  );
}

export default HealthQuestions;
