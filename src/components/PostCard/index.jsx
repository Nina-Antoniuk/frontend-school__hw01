/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { PropTypes } from 'prop-types';
import 'animate.css';
import CardContentInfo from 'components/CardContentInfo';
import CardAction from 'components/CardAction';

const PostCard = function PostCard({
  info: { uniqueId, auth, authStats, video, hashtags, desc, comments, views },
}) {
  return (
    <Card className="animate__animated animate__pulse" sx={{ width: '100%' }}>
      <Link to={`/profile/${uniqueId}`}>
        <CardHeader
          avatar={
            <Avatar
              alt={(auth && auth.nickName) || auth.nickname}
              src={(auth && auth.avatar) || auth.avatarMedium}
              sx={{ width: 56, height: 56 }}
            />
          }
          title={(auth && auth.nickName) || auth.nickname}
        />
      </Link>
      <CardContentInfo video={video} hashtags={hashtags} desc={desc} />
      <CardAction
        auth={auth}
        authStats={authStats}
        views={views}
        comments={comments}
      />
    </Card>
  );
};

PostCard.defaultProps = {
  info: {
    uniqueId: '',
    auth: {},
    authStats: {},
    video: '',
    hashtags: [],
    desc: '',
    comments: 0,
    views: 0,
  },
};

PostCard.propTypes = {
  info: PropTypes.shape({
    uniqueId: PropTypes.string,
    auth: PropTypes.shape({
      heart: PropTypes.number,
      nickName: PropTypes.string,
      nickname: PropTypes.string,
      avatar: PropTypes.string,
      avatarMedium: PropTypes.string,
    }),
    authStats: PropTypes.shape({
      heartCount: PropTypes.number,
    }),
    video: PropTypes.string,
    hashtags: PropTypes.array,
    desc: PropTypes.string,
    comments: PropTypes.number,
    views: PropTypes.number,
  }),
};

export default PostCard;
