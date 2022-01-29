import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import PostCard from './index';

const fakeProps = {
  info: {
    author: {
      uniqueId: '123',
      nickname: 'Test Nickname',
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

describe('Check PostCard component rendering', () => {
  test('with fake props', () => {
    const history = createMemoryHistory();
    const container = render(
      <Router history={history}>
        <PostCard {...fakeProps} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  test('without fake props', () => {
    const history = createMemoryHistory();
    const container = render(
      <Router history={history}>
        <PostCard />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});

test('link path display test', () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <PostCard {...fakeProps} />
    </Router>,
  );
  const link = getByTestId('profileLink');
  expect(link.href).toContain(`/profile/${fakeProps.info.author.uniqueId}`);
});
