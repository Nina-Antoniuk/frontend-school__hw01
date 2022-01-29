import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Post from './index';

jest.mock('../PostCard', () => {
  return () => {
    return <p>Mocked component</p>;
  };
});

it('Check Post component rendering', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history}>
      <Post />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
