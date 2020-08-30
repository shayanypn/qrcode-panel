import { IUser } from '../../types';
import API from './index';

describe('API tool', () => {
  test('fetchUser should worl', async () => {
    const data = {first_name: 'Luke', last_name: 'sha'};
    global.fetch = jest.fn((): Promise<any> => {
      return Promise.resolve({
        json(){
          return Promise.resolve(data);
        }
      })
    })
    const user = await API.fetchUser().then(res => res.json());
    expect(user).toBe(data);
  });

  test('fetchPlan should worl', async () => {
    const data = {scan: '1', scan_max: '100'};
    global.fetch = jest.fn((): Promise<any> => {
      return Promise.resolve({
        json(){
          return Promise.resolve(data);
        }
      })
    })
    const user = await API.fetchPlan().then(res => res.json());
    expect(user).toBe(data);
  });

  test('storeUser should worl', async () => {
    const data = {msg: 'ok'};
    global.fetch = jest.fn((): Promise<any> => {
      return Promise.resolve({
        json(){
          return Promise.resolve(data);
        }
      })
    })
    const user = await API.storeUser({} as IUser).then(res => res.json());
    expect(user).toBe(data);
  });
});