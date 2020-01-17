import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the counts display', () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId('display');
  expect(display).toBeInTheDocument();
});

test('renders the dashboard', () => {
  const { getByTestId } = render(<App />);
  const dashboard = getByTestId('dashboard');
  expect(dashboard).toBeInTheDocument();
});

