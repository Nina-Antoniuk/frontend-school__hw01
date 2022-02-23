import React from 'react';
import { v4 as uuid } from 'uuid';
import LoaderComponent from '../../components/LoaderComponent';
import styled from 'styled-components';
import { STATUSES } from '../../shared/consts';
import Post from '../../components/Post';
import { fetchTrends } from '../../api/fetchTrends';
import { size } from '../../shared/css-consts';

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 30px;

  @media screen and (min-width: ${size.tabletS}) {
    padding-top: 50px;
  }
`;
const PostList = styled.ul`
  max-width: 80%;
  padding-left: 0;
  list-style-type: none;

  @media screen and (min-width: ${size.tabletS}) {
    max-width: 70%;
    margin-left: 20%;
  }
`;
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
      <Section>
        {trends ? (
          <PostList>
            {trends.map((trend) => (
              <Post
                key={uuid()}
                video={trend.video.playAddr}
                author={trend.author}
                description={trend.desc}
                stats={trend.stats}
                heart={trend.authorStats.heart}
              />
            ))}
          </PostList>
        ) : (
          <p>No data came from the server</p>
        )}
      </Section>
    );
  }
};

export default NewsFeed;
