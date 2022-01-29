import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { PropTypes } from 'prop-types';
import styles from './CardAction.module.scss';

const CardAction = function CardAction({ heart, views, comments }) {
  return (
    <div className={styles.info}>
      <div className={styles.infoBox}>
        <IconButton aria-label="likes">
          <FavoriteBorderIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {heart}
      </div>
      <div className={styles.infoBox}>
        <IconButton aria-label="views">
          <RemoveRedEyeOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {views}
      </div>

      <div className={styles.infoBox}>
        <IconButton aria-label="comments">
          <MessageOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {comments}
      </div>
    </div>
  );
};

CardAction.defaultProps = {
  heart: 0,
  views: 0,
  comments: 0,
};

CardAction.propTypes = {
  heart: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
};

export default CardAction;
