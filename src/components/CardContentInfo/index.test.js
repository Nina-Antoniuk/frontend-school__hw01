import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardContentInfo from './index';

describe('Check CardContentInfo text content rendering', () => {
  test('with fake link', () => {
    const fakeProps = {
      video: 'https://www.youtube.com/watch?v=Ex2j4oIweDk',
      desc: 'about unit tests',
    };

    const container = render(<CardContentInfo {...fakeProps} />);
    expect(container).toMatchSnapshot();
  });

  test('without props', () => {
    const container = render(<CardContentInfo />);
    expect(container).toMatchSnapshot();
  });
});
