import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import PostCard from './index';

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

const fakeProps = {
  info: {
    author: {
      uniqueId: '123',
      nickname: 'Test nickname',
      avatarMedium:
        'https://cdn.javarush.ru/images/article/a166ce03-22ed-4303-a7bf-9a52af158a7f/original.jpeg',
      signature: 'test signature',
    },
    stats: {
      commentCount: 100,
      playCount: 200,
    },
    video: 'https://www.youtube.com/watch?v=Ex2j4oIweDk',
    description: 'about unit tests',
    heart: 50,
  },
};

test('render PostCard', () => {
  const history = createMemoryHistory();

  act(() => {
    render(
      <Router history={history}>
        <PostCard {...fakeProps} />
      </Router>,
      container,
    );
  });
  expect(container).toMatchSnapshot();
});
