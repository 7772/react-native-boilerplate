import { 
    createStackNavigator, 
    createBottomTabNavigator, 
} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    }, 
    {
        initailRouteName: 'Home',
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    }, 
    {
        initailRouteName: 'Profile',
    }
);

const RouteConfigs = {
    Home: HomeStack,
    Profile: ProfileStack,
};

const BottomTabNavigatorConfig = {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#fff',
        },
    },
};

const RootTabNav = createBottomTabNavigator(
    RouteConfigs,
    BottomTabNavigatorConfig
); 

export default RootTabNav;

