import React from 'react';
import { render, screen } from '../../utils/test-utils';
import NoVideoWindow from './NoVideoWindow';
 
test('renders NoVideoWindow component', () => {
  render(<NoVideoWindow />);
 
  expect(screen.getByText('Sorry, there\'s no video')).toBeTruthy();
});
