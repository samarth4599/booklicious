import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {EScreenState} from '../../types/enums';
import ErrorScreen from '../ErrorScreen';
import {IContentView} from './interface';
import styles from './styles';

/**
 * Renders the content view based on the state with predefined loading and error views.
 *
 * @param state - The current state of the content view.
 * @param children - The content to render when the state is SUCCESS.
 * @param onRetry - The callback function to retry an action when the state is ERROR.
 * @returns The rendered content view based on the state.
 */
const ContentView: React.FC<IContentView> = ({state, children, onRetry}) => {
  switch (state) {
    case EScreenState.LOADING:
      return (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={'#000'} />
        </View>
      );
    case EScreenState.ERROR:
      return <ErrorScreen onRetry={onRetry} />;
    case EScreenState.SUCCESS:
      return children;
    default:
      return null;
  }
};

export default memo(ContentView, (prev, next) => prev.state === next.state);
