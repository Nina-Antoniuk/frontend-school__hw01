import consts from './consts';

const { BASE_URL, HOST, API_KEY } = consts;

export default function callAPI(endPoint, id = null) {
  return fetch(`${BASE_URL}/${endPoint}/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST,
      'x-rapidapi-key': API_KEY,
    },
  });
}
