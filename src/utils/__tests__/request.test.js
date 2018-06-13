import request from '../request';
import fetchMock from 'fetch-mock';

describe('testing api', () => {

  it('In case it return sucessful with status 200, it should return proper data', () => {
    fetchMock.mock('http://example1.com', {
      status: 200,
      data: '12345'
    });

    request('http://example1.com').then(res => {
      expect(res.data).toEqual('12345')
    });
  })

  it('In case it return sucessful with status 200, it should return proper data', () => {
    fetchMock.mock('http://example2.com', 204);

    request('http://example2.com').then(res => {
      expect(res).toEqual(null)
    })
  })
})