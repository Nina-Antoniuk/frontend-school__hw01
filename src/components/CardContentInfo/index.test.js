import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CardContentInfo from './index';

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

describe('condition-dependent component render check', () => {
  test('render CardContentInfo with fake link', () => {
    const fakeProps = {
      video: 'https://www.youtube.com/watch?v=Ex2j4oIweDk',
      hashtags: [
        { id: '123', name: 'jest' },
        { id: '123', name: 'enzyme' },
      ],
      desc: 'about unit tests',
    };
    act(() => {
      render(<CardContentInfo {...fakeProps} />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('render CardContentInfo without fake link', () => {
    const fakeProps = {
      video: '',
      hashtags: [
        { id: '123', name: 'jest' },
        { id: '123', name: 'enzyme' },
      ],
      desc: 'about unit tests',
    };
    act(() => {
      render(<CardContentInfo {...fakeProps} />, container);
    });
    expect(container).toMatchSnapshot();
  });
});
