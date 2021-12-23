import React from 'react';
import s from './Post.module.scss';
import PostCard from '../PostCard/PostCard';

const Post = function Post(properties) {
  return (
    <li className={s.ListItem}>
      <PostCard info={properties} />
    </li>
  );
};

export default Post;
