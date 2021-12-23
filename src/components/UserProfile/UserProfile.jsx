import React from 'react';
import { PropTypes } from 'prop-types';
import s from './UserProfile.module.scss';

const UserProfile = function UserProfile({ profileInfo: { user, stats } }) {
  return (
    <div className={s.userProfile}>
      <div className={s.thumb}>
        <img
          className={s.userAvatar}
          src={
            (user && user.avatarMedium) || 'https://via.placeholder.com/300x300'
          }
          alt={(user && user.nickname) || 'placeholder for staranger'}
          width="300"
          height="300"
        />
      </div>
      <div className={s.userInfo}>
        <p>
          <span className={s.field}>User name</span>:
          {(user && user.nickname) || 'staranger'}
        </p>
        <p>
          <span className={s.field}>Followers</span>:
          {(stats && stats.followerCount) || 0}
        </p>
        <p>
          <span className={s.field}>Following</span>:
          {(stats && stats.followingCount) || 0}
        </p>
        <p>
          <span className={s.field}>Count of posts</span>:
          {(stats && stats.videoCount) || 0}
        </p>
        <p>
          <span className={s.field}>Signature</span>:
          {(user && user.signature) || ''}
        </p>
      </div>
    </div>
  );
};

UserProfile.defaultProps = {
  profileInfo: {
    user: {
      nickname: '',
      avatarMedium: '',
      signature: '',
    },
    stats: {},
  },
};

UserProfile.propTypes = {
  profileInfo: PropTypes.shape({
    user: PropTypes.shape({
      avatarMedium: PropTypes.string,
      nickname: PropTypes.string,
      signature: PropTypes.string,
    }),
    stats: PropTypes.shape({
      followerCount: PropTypes.number,
      followingCount: PropTypes.number,
      videoCount: PropTypes.string,
    }),
  }),
};

export default UserProfile;
