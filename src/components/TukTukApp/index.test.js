import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import TikTukApp from './index';
import Nav from '../Nav';
import Routes from '../Routes';

jest.mock('../Nav', () => {
  return () => {
    return <p>Mocked Nav component</p>;
  };
});

jest.mock('../Routes', () => {
  return () => {
    return <p>Mocked Routes component</p>;
  };
});

test('Check Routes component rendering', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history}>
      <TikTukApp />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
