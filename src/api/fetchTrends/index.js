import { API_CONSTS } from '../../shared/consts';
import { feedData } from '../../shared/trending-feeds';

const { BASE_URL, HOST, API_KEY } = API_CONSTS;

export function fetchTrends() {
  return fetch(`${BASE_URL}/trending/feed`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST,
      'x-rapidapi-key': API_KEY,
    },
  }).then((res) => res.json());
}
