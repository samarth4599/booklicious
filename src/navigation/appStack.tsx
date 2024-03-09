import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import BottomNavigationBar from './bottomNavigationBar';
import {ROUTES} from '../types/enums';
import {TStackNavigationRoute} from '../types/types';

const Stack = createNativeStackNavigator<TStackNavigationRoute>();

const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.BOTTOMBAR}
      screenOptions={{animation: 'slide_from_left'}}>
      <Stack.Screen
        name={ROUTES.BOTTOMBAR}
        component={BottomNavigationBar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
