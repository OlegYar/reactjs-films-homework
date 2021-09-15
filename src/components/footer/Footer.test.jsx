import React from 'react';
import { render, screen } from '../../utils/test-utils';
 
import Footer from './Footer';
 
test('renders Footer component', () => {
  render(<Footer />);
 
  expect(screen.getByText('FILMS')).toBeTruthy();
  expect(screen.getByText('Copyright © 2021 FILMS. Oleg Yarotskiy')).toBeTruthy();
});
