import { API_CONSTS } from '../../shared/consts';

const { BASE_URL, HOST, API_KEY } = API_CONSTS;

export function fetchUserInfo(id) {
  return fetch(`${BASE_URL}/user/info/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST,
      'x-rapidapi-key': API_KEY,
    },
  }).then((res) => res.json());
}
