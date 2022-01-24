import { fetchUserInfo } from '../../api/fetchUserInfo';
import { STATUSES } from '../../shared/js/consts';

const { RESOLVE, REJECT } = STATUSES;

export function processingUserInfo(id, setUserInfo, setStatus, setError) {
  return fetchUserInfo(id)
    .then((data) => {
      setUserInfo(data);
      return setStatus(RESOLVE);
    })
    .catch((err) => {
      setError(err);
      return setStatus(REJECT);
    });
}
