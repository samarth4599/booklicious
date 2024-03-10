import {TTabNavigationRoute} from '../../types/types';

export interface ITabIconProps {
  routeName: keyof TTabNavigationRoute;
  focused: boolean;
}
