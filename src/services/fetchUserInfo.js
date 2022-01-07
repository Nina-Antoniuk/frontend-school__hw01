import callAPI from './callAPIs';

export function fetchUserInfo(id) {
  return callAPI('user/info', id);
}
