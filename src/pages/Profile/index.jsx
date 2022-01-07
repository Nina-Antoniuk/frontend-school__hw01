import React from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { feed } from 'services/feed';
import { STATUSES } from 'constants/js/consts';
import { fetchUserInfo } from 'services/fetchUserInfo';
import Post from 'components/Post';
import UserProfile from 'components/UserProfile';
import LoaderComponent from 'components/LoaderComponent';
import styles from './Profile.module.scss';

const { PENDING, RESOLVE, REJECT, INIT } = STATUSES;

const Profile = function Profile({ firstVideo }) {
  const [userInfo, setUserInfo] = React.useState([]);
  const [userFeed, setUserFeed] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');
  const { id } = useParams();

  React.useEffect(() => {
    setStatus(PENDING);
    setUserFeed(feed.itemList);
    fetchUserInfo(id)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
        return setStatus(RESOLVE);
      })
      .catch((error_) => {
        setError(error_);
        setStatus(REJECT);
      });
  }, [id]);

  if (status === INIT) {
    return <div />;
  }

  if (status === PENDING) {
    return <LoaderComponent />;
  }

  if (status === REJECT) {
    return (
      <div>
        Oops.. something went wrong!
        {error}
      </div>
    );
  }

  if (status === RESOLVE) {
    return (
      <section className={styles.section}>
        <UserProfile profileInfo={userInfo} />
        <ul className={styles.postsList}>
          {userFeed.map((post) => (
            <Post
              key={post.id}
              video={firstVideo.videoUrl}
              uniqueId={post.author.uniqueId}
              author={post.author}
              authStats={post.authorStats}
              hashtags={post.textExtra}
              description={post.desc}
              views={post.stats.playCount}
              comments={post.stats.commentCount}
            />
          ))}
        </ul>
      </section>
    );
  }
};

Profile.propTypes = {
  firstVideo: PropTypes.shape({
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
