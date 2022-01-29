import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Routes from './index';

jest.mock('../../pages/NewsFeed', () => {
  return () => {
    return <p>Mocked component</p>;
  };
});

test('Check Routes component rendering', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history}>
      <Routes />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});

test('Check debug loader', () => {
  const history = createMemoryHistory();
  const { debug } = render(
    <React.Suspense fallback="test loading">
      <Router history={history}>
        <Routes />
      </Router>
    </React.Suspense>,
  );
  debug();
});
