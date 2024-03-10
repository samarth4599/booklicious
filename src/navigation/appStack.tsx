import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import BottomNavigationBar from './bottomNavigationBar';
import {ROUTES} from '../types/enums';
import {TStackNavigationRoute} from '../types/types';
import DetailsScreen from '../screens/DetailsScreen';
import styles from './styles';

const Stack = createNativeStackNavigator<TStackNavigationRoute>();

/**
 * Represents the main stack of the application.
 * This stack contains the bottom navigation bar.
 */
const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.BOTTOMBAR}
      screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen
        name={ROUTES.BOTTOMBAR}
        component={BottomNavigationBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={DetailsScreen}
        options={props => ({
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle:
            props.route.name.slice(0, 1).toUpperCase() +
            props.route.name.slice(1),
          headerTitleStyle: styles.title,
          headerStyle: {backgroundColor: '#F6F6F6'},
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
