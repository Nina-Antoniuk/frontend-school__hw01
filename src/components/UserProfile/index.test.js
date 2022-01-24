import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import UserProfile from './index';

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
  user: {
    nickname: 'Test nickname',
    avatarMedium: 'test src',
    signature: 'test signature',
  },
};

test('TukTukApp', () => {
  act(() => {
    render(<UserProfile {...fakeProps} />, container);
  });
  expect(container).toMatchSnapshot();
});

// describe('component contain props', () => {
//   act(() => {
//     render(<UserProfile {...fakeProps} />, container);
//   });
//   test('nickname', () => {
//     expect(container.textContent).toContain(fakeProps.user.nickname);
//   });
//   test('signature', () => {
//     expect(container.querySelector('.userInfo').textContent).toContain(
//       fakeProps.user.signature,
//     );
//   });
// });
