import React from 'react';
import styled from 'styled-components';
import { size } from '../../shared/css-consts';
import PostCard from '../PostCard';

const ListItem = styled.li`
  max-width: 300px;
  border-radius: 3px;
  box-shadow: var(--shadow) 0px 5px 15px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${size.tabletS}) {
    max-width: 400px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: ${size.desktop}) {
    max-width: 500px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;
const Post = function Post(properties) {
  return (
    <ListItem>
      <PostCard info={properties} />
    </ListItem>
  );
};

export default Post;
