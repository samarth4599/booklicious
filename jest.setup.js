import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {jest} from '@jest/globals';

jest.useFakeTimers();

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
