import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen0107577Navigator from '../features/CopyOfBlankScreen0107577/navigator';
import UserProfile107514Navigator from '../features/UserProfile107514/navigator';
import Tutorial107513Navigator from '../features/Tutorial107513/navigator';
import NotificationList107484Navigator from '../features/NotificationList107484/navigator';
import Settings107483Navigator from '../features/Settings107483/navigator';
import Settings107475Navigator from '../features/Settings107475/navigator';
import UserProfile107473Navigator from '../features/UserProfile107473/navigator';
import UserProfile107412Navigator from '../features/UserProfile107412/navigator';
import Maps107392Navigator from '../features/Maps107392/navigator';
import Settings107370Navigator from '../features/Settings107370/navigator';
import Settings107355Navigator from '../features/Settings107355/navigator';
import NotificationList107354Navigator from '../features/NotificationList107354/navigator';
import Maps107353Navigator from '../features/Maps107353/navigator';
import UserProfile107350Navigator from '../features/UserProfile107350/navigator';
import Maps107331Navigator from '../features/Maps107331/navigator';
import Settings107309Navigator from '../features/Settings107309/navigator';
import Settings107294Navigator from '../features/Settings107294/navigator';
import NotificationList107293Navigator from '../features/NotificationList107293/navigator';
import Maps107292Navigator from '../features/Maps107292/navigator';
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
CopyOfBlankScreen0107577: { screen: CopyOfBlankScreen0107577Navigator },
UserProfile107514: { screen: UserProfile107514Navigator },
Tutorial107513: { screen: Tutorial107513Navigator },
NotificationList107484: { screen: NotificationList107484Navigator },
Settings107483: { screen: Settings107483Navigator },
Settings107475: { screen: Settings107475Navigator },
UserProfile107473: { screen: UserProfile107473Navigator },
UserProfile107412: { screen: UserProfile107412Navigator },
Maps107392: { screen: Maps107392Navigator },
Settings107370: { screen: Settings107370Navigator },
Settings107355: { screen: Settings107355Navigator },
NotificationList107354: { screen: NotificationList107354Navigator },
Maps107353: { screen: Maps107353Navigator },
UserProfile107350: { screen: UserProfile107350Navigator },
Maps107331: { screen: Maps107331Navigator },
Settings107309: { screen: Settings107309Navigator },
Settings107294: { screen: Settings107294Navigator },
NotificationList107293: { screen: NotificationList107293Navigator },
Maps107292: { screen: Maps107292Navigator },
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
