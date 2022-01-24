import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Nav from './index';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('render Nav', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Nav />
    </Router>,
    container,
  );
  expect(container).toMatchSnapshot();
});

test('check for a home link', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Nav />
    </Router>,
  );

  expect(screen.getByText(/News/i)).toBeInTheDocument();
});

test('check for a profile link', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Nav />
    </Router>,
  );

  expect(screen.getByText(/profile/i)).toBeInTheDocument();
});
