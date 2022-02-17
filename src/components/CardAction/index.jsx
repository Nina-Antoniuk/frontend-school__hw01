import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { PropTypes } from 'prop-types';

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 30%;
`;
const CardAction = function CardAction({ heart, views, comments }) {
  return (
    <Info>
      <InfoBox>
        <IconButton aria-label="likes">
          <FavoriteBorderIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {heart}
      </InfoBox>

      <InfoBox>
        <IconButton aria-label="views">
          <RemoveRedEyeOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {views}
      </InfoBox>

      <InfoBox>
        <IconButton aria-label="comments">
          <MessageOutlinedIcon sx={{ color: '#f33958' }} />
        </IconButton>
        {comments}
      </InfoBox>
    </Info>
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
