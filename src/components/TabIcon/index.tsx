/**
 * Renders an icon for a tab based on the provided route name and focus state.
 * @param {string} props.routeName - The name of the route.
 * @param {boolean} props.focused - Indicates whether the tab is currently focused.
 * @returns {React.ReactNode} The rendered icon component.
 */
import React from 'react';
import * as Icons from 'react-native-heroicons/solid';
import {ROUTES} from '../../types/enums';
import {ITabIconProps} from './types';

const TabIcon: React.FC<ITabIconProps> = ({routeName, focused}) => {
  const color = focused ? 'green' : 'gray';
  switch (routeName) {
    case ROUTES.HOME:
      return <Icons.HomeIcon color={color} size={20} />;
    case ROUTES.FAVORITES:
      return <Icons.HeartIcon color={color} size={20} />;

    default:
      return undefined;
  }
};

export default TabIcon;
