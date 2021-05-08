import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('render Button', () => {
  const { getByTestId } = render(<Button value="Watch Now" />);
  const buttonEl = getByTestId('button');
  expect(buttonEl.textContent).toBe('Watch Now');
});
