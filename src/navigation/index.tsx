import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SafeAreaAppView from '../components/SafeAreaAppView';
import AppStack from './appStack';
import BookContextProvider from '../contexts/BookContextProvider';

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaAppView>
        <BookContextProvider>
          <AppStack />
        </BookContextProvider>
      </SafeAreaAppView>
    </NavigationContainer>
  );
};
