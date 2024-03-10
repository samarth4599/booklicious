import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';
import {ISafeAreaAppView} from './types';

/**
 * A component that provides safe area insets for the app view.
 *
 * @component
 * @example
 * ```tsx
 * <SafeAreaAppView>
 *   <Text>Hello, World!</Text>
 * </SafeAreaAppView>
 * ```
 */
const SafeAreaAppView: React.FC<ISafeAreaAppView> = props => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.headerView} />
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.mainView}>{props.children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeAreaAppView;
