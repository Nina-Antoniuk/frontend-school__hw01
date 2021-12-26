import callAPI from './callAPIs';

export default function fetchUserInfo(id) {
  callAPI('user/info', id);
}
