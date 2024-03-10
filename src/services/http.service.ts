import {CONSTANTS, EReqMethod} from '../types/enums';

type THttpServiceType = {
  url: string;
  method: EReqMethod;
  body?: any;
};

export const HttpService = async (param: THttpServiceType) => {
  // const hasNetwork = await isNetworkConnected();
  // if (!hasNetwork) {
  //   return Promise.resolve({
  //     resultStatus: {
  //       status: 'ERROR',
  //       errorMessage: 'Network connection is down',
  //       errorCode: 65125,
  //     },
  //   });
  // }

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
