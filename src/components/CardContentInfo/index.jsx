import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import styles from './CardContentInfo.module.scss';

const CardContentInfo = function CardContentInfo({ video, desc }) {
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

      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
  );
};

CardContentInfo.defaultProps = {
  video: '',
  desc: '',
};

CardContentInfo.propTypes = {
  video: PropTypes.string,
  desc: PropTypes.string,
};

export default CardContentInfo;
