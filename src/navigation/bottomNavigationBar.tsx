import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import HomeScreen from '../screens/HomeScreen';
import {ROUTES} from '../types/enums';
import {TTabNavigationRoute} from '../types/types';

const BottomNavigationBar: FC = () => {
  const Tab = createBottomTabNavigator<TTabNavigationRoute>();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused}) => TabIcon(route.name, focused, route.params?.iconName),
      //   tabBarHideOnKeyboard: true,
      //   tabBarShowLabel: true,
      //   lazy: false,
      //   tabBarLabelStyle: {
      //     fontSize: theme.typography.fontSize.normal,
      //     fontFamily: theme.typography.fontFamily[500],
      //     display: isTablet ? 'flex' : 'none',
      //   },
      //   tabBarLabel: () => null,
      //   tabBarStyle: {
      //     height: dimensions.viewHeight(CONSTANTS.TAB_BAR_HEIGHT),
      //     backgroundColor: theme.palette.white.main,
      //   },
      //   tabBarActiveTintColor: theme.palette.primary.main,
      //   tabBarInactiveTintColor: theme.palette.black.main,
      //   tabBarItemStyle: {
      //     paddingHorizontal: dimensions.viewWidth(20),
      //     paddingVertical: dimensions.viewHeight(20),
      //   },
      //   tabBarLabelPosition: 'below-icon',
      // })}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
