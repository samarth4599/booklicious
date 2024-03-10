import {ToastAndroid} from 'react-native';
import {CONSTANTS, EReqMethod} from '../types/enums';
import {isNetworkConnected} from './network.service';

type THttpServiceType = {
  url: string;
  method: EReqMethod;
  body?: any;
};

/**
 * Sends an HTTP request with the specified parameters.
 * @param param - The parameters for the HTTP request.
 * @returns A Promise that resolves to the JSON response from the server.
 */
export const HttpService = async (param: THttpServiceType) => {
  const hasNetwork = await isNetworkConnected();
  if (!hasNetwork) {
    ToastAndroid.show('No Internet !', ToastAndroid.SHORT);
    return Promise.reject(CONSTANTS.GENERIC_ERR_MSG);
  }

  const {url, method, body = undefined} = param;

  const resp = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).catch(() => {
    return Promise.reject(CONSTANTS.GENERIC_ERR_MSG);
  });

  return resp.json();
};
