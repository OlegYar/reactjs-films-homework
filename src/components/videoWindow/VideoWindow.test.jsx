import React from 'react';
import { render, screen } from '../../utils/test-utils';
import VideoWindow from './VideoWindow';
 
test('renders VideoWindow component', () => {
  render(<VideoWindow videoKey='c31KJTzt5YY' />);
 
  expect(screen.getByTitle('YouTube video player')).toBeTruthy();
});
