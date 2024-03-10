import Keychain, {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword,
} from 'react-native-keychain';
import {IBook, ISavedData} from '../types/interfaces';

/**
 * Saves a value to the storage.
 * @param key - The key to associate with the value.
 * @param value - The value to be saved.
 */
export const saveValueToStorage = async (key: string, value: IBook[]) => {
  const options: Keychain.Options = {storage: Keychain.STORAGE_TYPE.AES};
  const credentials = await getGenericPassword(options);
  let data: ISavedData = {};
  if (credentials && credentials.password !== 'false') {
    data = {
      ...JSON.parse(credentials.password),
    };
  }
  data[key] = value;
  await setGenericPassword('AppData', JSON.stringify(data), options);
};

/**
 * Retrieves a value from the storage based on the provided key.
 * @param key - The key to retrieve the value for.
 * @returns The value associated with the provided key, or null if the key does not exist.
 */
export const getValueFromStorage = async (key: string) => {
  const options: Keychain.Options = {storage: Keychain.STORAGE_TYPE.AES};
  let savedValues = await getGenericPassword(options);

  if (savedValues) {
    savedValues = JSON.parse(savedValues.password);
    return savedValues[key as keyof typeof savedValues];
  }

  return null;
};

/**
 * Clears the storage by resetting the generic password.
 * @returns {Promise<void>} A promise that resolves when the storage is cleared.
 */
export const clearStorage = async () => {
  await resetGenericPassword();
};
