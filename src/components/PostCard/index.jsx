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
  info: { author, stats, video, description, heart },
}) {
  return (
    <Card className="animate__animated animate__pulse" sx={{ width: '100%' }}>
      <Link className="postCard__link" to={`/profile/${author.uniqueId}`}>
        <CardHeader
          avatar={
            <Avatar
              alt={author.nickname}
              src={author.avatarMedium}
              sx={{ width: 56, height: 56 }}
            />
          }
          title={author.nickname}
        />
      </Link>
      <CardContentInfo video={video} desc={description} />
      <CardAction
        heart={heart}
        views={stats.playCount}
        comments={stats.commentCount}
      />
    </Card>
  );
};

PostCard.defaultProps = {
  info: {
    author: {},
    stats: {},
    video: '',
    description: '',
    heart: 0,
  },
};

PostCard.propTypes = {
  info: PropTypes.shape({
    author: PropTypes.shape({
      uniqueId: PropTypes.string,
      nickname: PropTypes.string,
      avatarMedium: PropTypes.string,
      signature: PropTypes.string,
    }),
    video: PropTypes.string,
    heart: PropTypes.number,
    description: PropTypes.string,
    stats: PropTypes.shape({
      commentCount: PropTypes.number,
      playCount: PropTypes.number,
    }),
  }),
};

export default PostCard;
