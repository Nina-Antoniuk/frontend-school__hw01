import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Nav from './index';

test('Check Nav component rendering', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history}>
      <Nav />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});

describe('Check Nav text content rendering', () => {
  test('for home link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Nav />
      </Router>,
    );

    expect(screen.getByText(/News/i)).toBeInTheDocument();
  });

  test('for profile link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Nav />
      </Router>,
    );

    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});

describe('routes pathes', () => {
  test('news (home)', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Nav />
      </Router>,
    );
    const link = getByTestId('newsPage');
    expect(link.href).toContain('/');
  });

  test('profile', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Nav />
      </Router>,
    );
    const link = getByTestId('profile');
    expect(link.href).toContain(`/profile/dave.xp`);
  });
});
