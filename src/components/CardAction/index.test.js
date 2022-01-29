import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import CardAction from './index';

const fakeProps = {
  heart: 500,
  views: 100,
  comments: 5,
};

describe('Check CardAction text content rendering', () => {
  test('with fake props', () => {
    const container = render(<CardAction {...fakeProps} />);
    expect(container).toMatchSnapshot();
  });

  test('without fake props', () => {
    const container = render(<CardAction />);
    expect(container).toMatchSnapshot();
  });
});

describe('Check widget content rendering', () => {
  test('insert first fake props', () => {
    render(<CardAction {...fakeProps} />);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
  });

  test('insert second fake props', () => {
    const anotherProps = {
      heart: 10,
      views: 20,
      comments: 0,
    };
    render(<CardAction {...anotherProps} />);

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
