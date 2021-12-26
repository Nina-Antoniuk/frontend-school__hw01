import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { v4 as uuid } from 'uuid';
import { PropTypes } from 'prop-types';
import styles from './CardContentInfo.module.scss';

const CardContentInfo = function CardContentInfo({ video, hashtags, desc }) {
  return (
    <CardContent>
      {video ? (
        <video
          className={styles.video}
          src={video}
          controls
          autoPlay
          muted
          loop
          preload="auto"
        />
      ) : (
        <img
          className={styles.placeholder}
          src="https://via.placeholder.com/250x300.png?text=video+is+not+available"
          alt="placeholder"
        />
      )}

      <Typography
        variant="overline"
        sx={{ lineHeight: 1.2, marginBottom: '5px' }}
      >
        {hashtags.map((hashtag) => (
          <p
            className={styles.hashtags}
            key={hashtag.id !== undefined ? hashtag.id : uuid()}
          >
            #{(hashtag && hashtag.name) || hashtag.hashtagName}
          </p>
        ))}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
  );
};

CardContentInfo.defaultProps = {
  video: '',
  hashtags: [],
  desc: '',
};

CardContentInfo.propTypes = {
  video: PropTypes.string,
  hashtags: PropTypes.array,
  desc: PropTypes.string,
};

export default CardContentInfo;
