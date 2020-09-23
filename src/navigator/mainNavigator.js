import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile107291Navigator from '../features/UserProfile107291/navigator';
import Maps107272Navigator from '../features/Maps107272/navigator';
import Settings107250Navigator from '../features/Settings107250/navigator';
import Settings107235Navigator from '../features/Settings107235/navigator';
import NotificationList107234Navigator from '../features/NotificationList107234/navigator';
import Maps107233Navigator from '../features/Maps107233/navigator';
import BlankScreen0107232Navigator from '../features/BlankScreen0107232/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile107291: { screen: UserProfile107291Navigator },
Maps107272: { screen: Maps107272Navigator },
Settings107250: { screen: Settings107250Navigator },
Settings107235: { screen: Settings107235Navigator },
NotificationList107234: { screen: NotificationList107234Navigator },
Maps107233: { screen: Maps107233Navigator },
BlankScreen0107232: { screen: BlankScreen0107232Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
