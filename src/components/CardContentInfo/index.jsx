import React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import { size } from '../../shared/css-consts';

const Video = styled('video')`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  max-width: 100%;

  @media screen and(min-width: ${size.tabletS}) {
    max-width: 600px;
    max-height: 500px;
  }
`;
const Placeholder = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const CardContentInfo = function CardContentInfo({ video, desc }) {
  return (
    <CardContent>
      {video ? (
        <Video src={video} controls autoPlay muted loop preload="auto" />
      ) : (
        <Placeholder
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
  desc: 'here should be a description',
};

CardContentInfo.propTypes = {
  video: PropTypes.string,
  desc: PropTypes.string,
};

export default CardContentInfo;
