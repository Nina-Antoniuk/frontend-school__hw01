import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { size } from '../../shared/css-consts';

const Wrapper = styled.div`
  padding: 20px;
  box-shadow: var(--shadow) 0px 5px 15px;
  background-color: var(--light-color);

  @media screen and (max-width: ${size.mobileL}) {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${size.tabletS}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 500px;
    margin-left: 30%;
    margin-bottom: 50px;
    padding: 80px 50px 30px;
  }

  @media screen and (min-width: ${size.desktop}) {
    max-width: 800px;
  }
`;
const Thumb = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: var(--placeholder-color);

  @media screen and (min-width: ${size.tabletS}) {
    max-width: 300px;
  }
`;
const Avatar = styled.img`
  display: block;
  width: 100%;
`;
const Info = styled.div`
  @media screen and (min-width: ${size.desktop}) {
    flex-basis: 50%;
  }
`;

const Field = styled.span`
  text-decoration: underline;
`;

const UserProfile = function UserProfile({
  user: { avatarMedium, nickname, signature },
}) {
  return (
    <Wrapper>
      <Thumb>
        <Avatar
          data-testid="userAvatar"
          src={avatarMedium || 'https://via.placeholder.com/300x300'}
          alt={nickname || 'placeholder for stranger'}
          width="300"
          height="300"
        />
      </Thumb>
      <Info>
        <p>
          <Field>User name</Field>:<span>{nickname || 'stranger'}</span>
        </p>
        <p>
          <Field>Signature</Field>:{signature || ''}
        </p>
      </Info>
    </Wrapper>
  );
};

UserProfile.defaultProps = {
  user: {
    nickname: '',
    avatarMedium: '',
    signature: '',
  },
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatarMedium: PropTypes.string,
    nickname: PropTypes.string,
    signature: PropTypes.string,
  }),
};

export default UserProfile;
