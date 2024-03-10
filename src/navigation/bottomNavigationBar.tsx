import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {FC, useCallback} from 'react';
import {Text} from 'react-native';
import TabIcon from '../components/TabIcon';
import FavouritesScreen from '../screens/FavouritesScreen';
import HomeScreen from '../screens/HomeScreen';
import {ROUTES} from '../types/enums';
import {TTabNavigationRoute} from '../types/types';
import styles from './styles';

const BottomNavigationBar: FC = () => {
  const Tab = createBottomTabNavigator<TTabNavigationRoute>();

  const header = useCallback(
    (props: BottomTabHeaderProps) => (
      <Text style={styles.title}>
        {props.route.name.slice(0, 1).toUpperCase() + props.route.name.slice(1)}
      </Text>
    ),
    [],
  );

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
        options={{
          headerShown: true,
          header,
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={FavouritesScreen}
        options={{
          headerShown: true,
          header,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
