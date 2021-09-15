import React from 'react';
import { render, screen } from '../../utils/test-utils';
 
import Spinner from './Spinner';
 
test('renders Spinner component', () => {
  render(<Spinner />);
 
  expect(screen.getByText('LOADING')).toBeTruthy();
});
