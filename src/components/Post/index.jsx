import React from 'react';
import PostCard from '../PostCard';
import styles from './Post.module.scss';

const Post = function Post(properties) {
  return (
    <li className={styles.ListItem}>
      <PostCard info={properties} />
    </li>
  );
};

export default Post;
