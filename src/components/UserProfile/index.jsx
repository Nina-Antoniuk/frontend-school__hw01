import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './UserProfile.module.scss';

const UserProfile = function UserProfile({
  user: { avatarMedium, nickname, signature },
}) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.thumb}>
        <img
          data-testid="userAvatar"
          className={styles.userAvatar}
          src={avatarMedium || 'https://via.placeholder.com/300x300'}
          alt={nickname || 'placeholder for stranger'}
          width="300"
          height="300"
        />
      </div>
      <div className={styles.userInfo}>
        <p>
          <span className={styles.field}>User name</span>:
          <span>{nickname || 'stranger'}</span>
        </p>
        <p>
          <span className={styles.field}>Signature</span>:{signature || ''}
        </p>
      </div>
    </div>
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
