import { fetchUserInfo } from './index';
import { userInfo } from '../../shared/user-info';

test('check userInfo function', async () => {
  const expected = { ...userInfo };

  jest.spyOn(window, 'fetch').mockImplementation(() => {
    const fetchResponse = {
      ok: true,
      json: () => Promise.resolve(expected),
    };
    return Promise.resolve(fetchResponse);
  });

  const json = await fetchUserInfo('241418783272443904');

  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(json).toMatchObject(expected);
  window.fetch.mockRestore();
});
