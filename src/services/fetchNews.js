import consts from './consts';

const { BASE_URL, HOST, API_KEY } = consts;

export default function fetchNews() {
  return fetch(`${BASE_URL}/trending/feed`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST,
      'x-rapidapi-key': API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .catch(console.error);
}
