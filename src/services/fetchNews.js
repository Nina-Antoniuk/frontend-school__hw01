import callAPI from './callAPIs';

export default function fetchUserInfo(id) {
  callAPI('trending/feed', id);
}
