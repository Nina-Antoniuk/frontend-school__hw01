import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './index';

const fakeProps = {
  user: {
    nickname: 'Test Nickname',
    avatarMedium: 'http://localhost/test%20src',
    signature: 'test signature',
  },
};

describe('Check UserProfile component rendering', () => {
  test('with fake props', () => {
    const container = render(<UserProfile {...fakeProps} />);
    expect(container).toMatchSnapshot();
  });

  test('without props', () => {
    const { getByText, getByAltText, getByTestId } = render(<UserProfile />);
    const img = getByTestId('userAvatar');
    expect(getByText('stranger')).toBeInTheDocument();
    expect(getByAltText('placeholder for stranger')).toBeInTheDocument();
    expect(img.src).toEqual('https://via.placeholder.com/300x300');
  });
});

describe('Check UserProfile text content rendering', () => {
  test('insert first fakeProps object', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <UserProfile {...fakeProps} />,
    );
    const img = getByTestId('userAvatar');
    expect(getByText(fakeProps.user.nickname)).toBeInTheDocument();
    expect(getByAltText(fakeProps.user.nickname)).toBeInTheDocument();
    expect(img.src).toEqual(fakeProps.user.avatarMedium);
  });

  test('insert second fakeProps object', () => {
    const anotherProps = {
      user: {
        nickname: 'Alina',
        avatarMedium: 'http://localhost/alina.jpg',
        signature: 'some signature from Alina',
      },
    };
    const { getByText, getByAltText, getByTestId } = render(
      <UserProfile {...anotherProps} />,
    );
    const img = getByTestId('userAvatar');
    expect(getByText(anotherProps.user.nickname)).toBeInTheDocument();
    expect(getByAltText(anotherProps.user.nickname)).toBeInTheDocument();
    expect(img.src).toEqual(anotherProps.user.avatarMedium);
  });
});
