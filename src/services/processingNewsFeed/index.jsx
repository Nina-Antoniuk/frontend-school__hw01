import { fetchTrends } from '../../api/fetchTrends';
import { STATUSES } from '../../shared/js/consts';

const { RESOLVE, REJECT } = STATUSES;

export function processingNewsFeed(setTrends, setStatus, setError) {
  return fetchTrends()
    .then((data) => {
      setTrends(data);
      return setStatus(RESOLVE);
    })
    .catch((err) => {
      setError(err);
      return setStatus(REJECT);
    });
}
