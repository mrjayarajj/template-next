// TODO: Need to configure axios and interceptor
import axios from 'axios';

const RestClient = {
  get: (reqObj) => axios.get(reqObj.url, {
    params: reqObj.params,
  headers:  reqObj.headers
  }),
  post: (reqObj) => axios.post(reqObj.url, reqObj.data, {
    config: reqObj.config,
    headers:  reqObj.headers
  }),
  put: (reqObj) => axios.put(reqObj.url, reqObj.data, {
    config: reqObj.config,
    headers:  reqObj.headers
  }),
  patch: (reqObj) => axios.patch(reqObj.url, reqObj.data, {
    config: reqObj.config,
    headers:  reqObj.headers
  }),
  delete: (reqObj) => axios.delete(reqObj.url, {
    config: reqObj.config,
    headers:  reqObj.headers,
  }),
};

export default RestClient;
