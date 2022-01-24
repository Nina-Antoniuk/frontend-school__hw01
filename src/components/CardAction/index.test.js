import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import CardAction from './index';

let container = null;
const fakeProps = {
  heart: 500,
  views: 100,
  comments: 5,
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('CardAction text content', () => {
  act(() => {
    render(<CardAction {...fakeProps} />, container);
  });
  expect(container).toMatchSnapshot();
});

describe('widget check', () => {
  test('check render views', () => {
    act(() => {
      render(<CardAction {...fakeProps} />, container);
    });

    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('check render comments', () => {
    act(() => {
      render(<CardAction {...fakeProps} />, container);
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('check render hearts', () => {
    act(() => {
      render(<CardAction {...fakeProps} />, container);
    });

    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
