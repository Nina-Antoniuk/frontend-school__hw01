import { fetchTrends } from './index';
import { feedData } from '../../shared/trending-feeds';

test('check fetchTrends function', async () => {
  // const expected = [...feedData];
  // jest.spyOn(window, 'fetch').mockImplementation(() => {
  //   const fetchResponse = {
  //     ok: true,
  //     json: () => Promise.resolve(expected),
  //   };
  //   return Promise.resolve(fetchResponse);
  // });
  // const json = await fetchTrends();
  // expect(window.fetch).toHaveBeenCalledTimes(1);
  // expect(json).toMatchObject(expected);
  // window.fetch.mockRestore();
});
