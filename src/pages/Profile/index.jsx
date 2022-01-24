import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../../components/UserProfile';
import LoaderComponent from '../../components/LoaderComponent';
import { processingUserInfo } from '../../services/processingUserInfo';
import { STATUSES } from '../../shared/js/consts';
import styles from './Profile.module.scss';

const { PENDING, RESOLVE, REJECT, INIT } = STATUSES;

const Profile = function Profile() {
  const [userInfo, setUserInfo] = React.useState([]);
  const [status, setStatus] = React.useState(INIT);
  const [error, setError] = React.useState('');
  const { id } = useParams();

  React.useEffect(() => {
    setStatus(PENDING);
    processingUserInfo(id, setUserInfo, setStatus, setError);
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
        <UserProfile user={userInfo} />
      </section>
    );
  }
};

export default Profile;
