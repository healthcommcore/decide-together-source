import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DTRadio from '../DTRadio';

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
