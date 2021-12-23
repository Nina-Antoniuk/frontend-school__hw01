import React from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import s from './Profile.module.scss';
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';
import statuses from '../../consts';
import UserProfile from '../../components/UserProfile/UserProfile';
import Post from '../../components/Post/Post';
import fetchUserById from '../../services/fetchUserInfo';
import { feed } from '../../services/feed';

const { PENDING, RESOLVE, REJECT, INIT } = statuses;

const Propfile = function Propfile({ firstVideo }) {
  const [userInfo, setUserInfo] = React.useState([]);
  const [userFeed, setUserFeed] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');
  const { id } = useParams();

  React.useEffect(() => {
    setStatus(PENDING);
    setUserFeed(feed.itemList);
    fetchUserById(id)
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
      <section className={s.section}>
        <UserProfile profileInfo={userInfo} />
        <ul className={s.postsList}>
          {userFeed.map((post) => (
            <Post
              key={post.id}
              uniqueId={post.author.uniqueId}
              auth={post.author}
              authStats={post.authorStats}
              video={firstVideo.videoUrl}
              hashtags={post.textExtra}
              desc={post.desc}
              views={post.stats.playCount}
              comments={post.stats.commentCount}
            />
          ))}
        </ul>
      </section>
    );
  }
};

Propfile.propTypes = {
  firstVideo: PropTypes.shape({
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Propfile;
