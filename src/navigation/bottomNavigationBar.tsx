import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import TabIcon from '../components/TabIcon';
import FavouritesScreen from '../screens/FavouritesScreen';
import HomeScreen from '../screens/HomeScreen';
import {ROUTES} from '../types/enums';
import {TTabNavigationRoute} from '../types/types';
import styles from './styles';

const BottomNavigationBar: FC = () => {
  const Tab = createBottomTabNavigator<TTabNavigationRoute>();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabIcon({routeName: route.name, focused}),
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        lazy: true,
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 30,
          backgroundColor: 'rgba(230,231,234,0.5)',
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={props => ({
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle:
            props.route.name.slice(0, 1).toUpperCase() +
            props.route.name.slice(1),
          headerTitleStyle: styles.title,
          headerBackgroundContainerStyle: {backgroundColor: 'white'},
        })}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={FavouritesScreen}
        options={props => ({
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle:
            props.route.name.slice(0, 1).toUpperCase() +
            props.route.name.slice(1),
          headerTitleStyle: styles.title,
          headerBackgroundContainerStyle: {backgroundColor: 'white'},
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
