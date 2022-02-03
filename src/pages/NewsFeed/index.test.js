import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsFeed from './index';

test('Check NewsPages rendering', () => {
  const container = render(<NewsFeed />);
  expect(container).toMatchSnapshot();
});
