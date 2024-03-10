import {ROUTES} from './enums';
import {IBook} from './interfaces';

export type TTabNavigationRoute = {
  [ROUTES.HOME]: undefined;
  [ROUTES.FAVORITES]: undefined;
};
export type TStackNavigationRoute = {
  [ROUTES.BOTTOMBAR]: undefined;
  [ROUTES.DETAILS]: undefined;
};

export type TNavRoutes = {
  [ROUTES.BOTTOMBAR]: undefined;
  [ROUTES.DETAILS]: {item: IBook};
};
