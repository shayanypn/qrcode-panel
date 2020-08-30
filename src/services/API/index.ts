import { IUser } from '../../types';

export default class API {
  private static base_url: string = 'https://run.mocky.io/v3';

  public static fetchUser(): Promise<Response> {
    return fetch(`${this.base_url}/dbdb9869-c94d-4f9f-9e44-1e33934d1a8f`);
  }

  public static fetchPlan(): Promise<Response> {
    return fetch(`${this.base_url}/31eb2b98-21e6-4c37-8d2f-dca611610139`);
  }

  public static storeUser(data: IUser): Promise<Response> {
    return fetch(`${this.base_url}/5165b945-b5f6-4b2f-b3cf-f02454fc047e`, {
      method: 'POST',
      body: data.toString()
    });
  }
}