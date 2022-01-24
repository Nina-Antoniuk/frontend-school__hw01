import { API_CONSTS } from '../../shared/js/consts';
import { userInfo } from '../../shared/js/user-info';

const { BASE_URL, HOST, API_KEY } = API_CONSTS;

export function fetchUserInfo(id) {
  const promise = new Promise(function (resolve, reject) {
    resolve(userInfo);
    reject('all operations are felt');
  });
  return promise;

  // return fetch(`${BASE_URL}/user/info/${id}`, {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-host': HOST,
  //     'x-rapidapi-key': API_KEY,
  //   },
  // }).then((res) => res.json());
}
