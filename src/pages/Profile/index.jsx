import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserProfile from '../../components/UserProfile';
import LoaderComponent from '../../components/LoaderComponent';
import { fetchUserInfo } from 'api/fetchUserInfo';
import { STATUSES } from '../../shared/consts';

const Section = styled.section`
  padding-top: 30px;
`;
const { PENDING, RESOLVE, REJECT, INIT } = STATUSES;

const Profile = function Profile() {
  const [userInfo, setUserInfo] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');
  const { id } = useParams();

  React.useEffect(() => {
    setStatus(PENDING);
    fetchUserInfo(id)
      .then((data) => {
        setUserInfo(data);
        return setStatus(RESOLVE);
      })
      .catch((err) => {
        setError(err);
        return setStatus(REJECT);
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
      <Section>
        <UserProfile user={userInfo} />
      </Section>
    );
  }
};

export default Profile;
