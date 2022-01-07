import React from 'react';
import { v4 as uuid } from 'uuid';
import { PropTypes } from 'prop-types';
import Post from 'components/Post';
import LoaderComponent from 'components/LoaderComponent';
import { STATUSES } from 'constants/js/consts';
import { fetchTrends } from 'services/fetchTrends';
import styles from './NewsFeed.module.scss';

const { PENDING, RESOLVE, REJECT, INIT } = STATUSES;

const NewsFeed = function NewsFeed({ getVideo }) {
  const [trends, setTrends] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setStatus(PENDING);
    fetchTrends()
      .then((response) => response.json())
      .then((data) => {
        setTrends(data);
        return setStatus(RESOLVE);
      })
      .catch((err) => {
        setError(err);
        return setStatus(REJECT);
      });
  }, []);

  React.useEffect(() => {
    if (!trends) return;
    getVideo(trends[0]);
  }, [getVideo, trends]);

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
      <section className="section">
        {trends ? (
          <ul className={styles.postsList}>
            {trends.map((trend) => (
              <Post
                key={uuid()}
                video={trend.videoUrl}
                uniqueId={trend.authorMeta.name}
                author={trend.authorMeta}
                hashtags={trend.hashtags}
                description={trend.text}
                views={trend.playCount}
                comments={trend.commentCount}
              />
            ))}
          </ul>
        ) : (
          <p>No data came from the server</p>
        )}
      </section>
    );
  }
};

NewsFeed.propTypes = {
  getVideo: PropTypes.func.isRequired,
};

export default NewsFeed;
