import React from 'react';
import { render, screen } from '../../utils/test-utils';
import ErrorIndicator from './ErrorIndicator';
 
test('renders ErrorIndicator component', () => {
  render(<ErrorIndicator />);
 
  expect(screen.getByText('Sorry, something went wrong.')).toBeTruthy();
});
