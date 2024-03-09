import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SafeAreaAppView from '../components/SafeAreaAppView';
import AppStack from './appStack';

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaAppView>
        <AppStack />
      </SafeAreaAppView>
    </NavigationContainer>
  );
};
