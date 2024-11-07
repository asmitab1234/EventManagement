import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import ServiceList from '../Screens/Service/ServiceList';
import Profile from '../Screens/Profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, // Hide tab labels (optional)
            }}
            initialRouteName='Home'
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon 
                            name="home" 
                            size={24} 
                            color={focused ? '#000' : 'gray'} 
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="ServiceList" 
                component={ServiceList} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon 
                            name="list" 
                            size={24} 
                            color={focused ? '#000' : 'gray'} 
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon 
                            name="user" 
                            size={24} 
                            color={focused ? '#000' : 'gray'} 
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTab;
