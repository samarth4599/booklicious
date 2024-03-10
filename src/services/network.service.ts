import NetInfo from '@react-native-community/netinfo';

/**
 * A function to return network connectivity status.
 * @returns Return Boolean according to connectivity status.
 */
export const isNetworkConnected = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  if (state) {
    return !!(state.isConnected && state.isInternetReachable);
  } else {
    return true;
  }
};
