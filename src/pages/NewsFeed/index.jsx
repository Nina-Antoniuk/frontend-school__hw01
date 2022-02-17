import React from 'react';
import { v4 as uuid } from 'uuid';
import LoaderComponent from '../../components/LoaderComponent';
import { STATUSES } from '../../shared/js/consts';
import styles from './NewsFeed.module.scss';
import Post from '../../components/Post';
import { fetchTrends } from 'api/fetchTrends';
import { feedData } from 'shared/js/trending-feeds';

const { PENDING, RESOLVE, REJECT, INIT } = STATUSES;

const NewsFeed = function NewsFeed() {
  const [trends, setTrends] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setStatus(PENDING);
    fetchTrends()
      .then((data) => {
        setTrends(data);
        return setStatus(RESOLVE);
      })
      .catch((err) => {
        setError(err);
        return setStatus(REJECT);
      });
  }, []);

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
            {/* {trends.map((trend) => ( */}
            {feedData.map((trend) => (
              <Post
                key={uuid()}
                video={trend.video.playAddr}
                author={trend.author}
                description={trend.desc}
                stats={trend.stats}
                heart={trend.authorStats.heart}
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

export default NewsFeed;
