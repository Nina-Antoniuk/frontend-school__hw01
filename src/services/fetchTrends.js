import callAPI from './callAPIs';

export function fetchTrends(id) {
  callAPI('trending/feed', id);
}
