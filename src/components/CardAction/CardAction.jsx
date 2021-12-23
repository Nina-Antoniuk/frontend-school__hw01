import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { PropTypes } from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import s from './CardAction.module.scss';

const CardAction = function CardAction({ auth, authStats, views, comments }) {
  return (
    <div className={s.info}>
      <div className={s.infoBox}>
        <IconButton aria-label="likes">
          <FavoriteBorderIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {(auth && auth.heart) || authStats.heartCount}
      </div>
      <div className={s.infoBox}>
        <IconButton aria-label="views">
          <RemoveRedEyeOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {views}
      </div>

      <div className={s.infoBox}>
        <IconButton aria-label="comments">
          <MessageOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {comments}
      </div>
    </div>
  );
};

CardAction.defaultProps = {
  auth: {},
  authStats: {},
  views: 0,
  comments: 0,
};

CardAction.propTypes = {
  auth: PropTypes.shape({
    heart: PropTypes.number,
  }),
  authStats: PropTypes.shape({
    heartCount: PropTypes.number,
  }),
  views: PropTypes.number,
  comments: PropTypes.number,
};

export default CardAction;
