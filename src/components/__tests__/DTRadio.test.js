import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DTRadio from '../DTRadio';
import dtrMock from '../__mocks__/dtradio.mock';

it('Should render a set of 3 radio buttons with a label', () => {
  const dtradio = render(
    <DTRadio
      label="Test label"
      name="Test name"
      choices={ ["Yes", "No", "I don't know"] }
      saveResponse={ jest.fn() }
    />
  );
  expect(dtradio.getByText(/test label/i)).toBeInTheDocument();
  expect(dtradio.getAllByRole('radio').length).toBe(3);
});

it('Should render 3 radio buttons and 3 followup radio buttons when option "Yes" is selected', async () => {
  const user = userEvent.setup();
  const multRadios = render(
    <DTRadio
      label={ dtrMock.label }
      name={ dtrMock.name }
      choices={ dtrMock.choices }
      followup={ dtrMock.followup }
      saveResponse={ jest.fn() }
    />
  );
  const yes = multRadios.queryByText("Yes");
  const followup = `${ dtrMock.name }-followup`;
  expect(multRadios.queryByTitle(followup)).not.toBeVisible();
  await user.click(yes);
  expect(multRadios.queryByTitle(followup)).toBeVisible();
});
