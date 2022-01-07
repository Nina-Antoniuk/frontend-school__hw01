import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { PropTypes } from 'prop-types';
import 'animate.css';
import CardContentInfo from '../CardContentInfo';
import CardAction from '../CardAction';

const PostCard = function PostCard({
  info: {
    uniqueId,
    author,
    authStats,
    video,
    hashtags,
    description,
    comments,
    views,
  },
}) {
  return (
    <Card className="animate__animated animate__pulse" sx={{ width: '100%' }}>
      <Link to={`/profile/${uniqueId}`}>
        <CardHeader
          avatar={
            <Avatar
              alt={(author && author.nickName) || (author && author.nickname)}
              src={(author && author.avatar) || (author && author.avatarMedium)}
              sx={{ width: 56, height: 56 }}
            />
          }
          title={(author && author.nickName) || (author && author.nickname)}
        />
      </Link>
      <CardContentInfo video={video} hashtags={hashtags} desc={description} />
      <CardAction
        author={author}
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
    author: {},
    authStats: {},
    video: '',
    hashtags: [],
    description: '',
    comments: 0,
    views: 0,
  },
};

PostCard.propTypes = {
  info: PropTypes.shape({
    uniqueId: PropTypes.string,
    author: PropTypes.shape({
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
    description: PropTypes.string,
    comments: PropTypes.number,
    views: PropTypes.number,
  }),
};

export default PostCard;
