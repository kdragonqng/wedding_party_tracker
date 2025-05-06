import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouterStack } from '../../../AppRouters';
import { AuthContext } from '../../contexts/AuthContext';
import Welcome from '../../views/welcome/Welcome';
import Login from '../../views/login/Login';
import Tabs from '../../navigation/MainTab';

function NavigationContainerComponents(): React.JSX.Element {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {
                isAuthenticated === true &&
                <AppRouterStack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
                    <AppRouterStack.Screen name="MainTab" component={Tabs} initialParams={{ needLogin: true }} />
                </AppRouterStack.Navigator>
            }
            {
                isAuthenticated === false &&
                <AppRouterStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, gestureEnabled: false, }}>
                    <AppRouterStack.Screen name="Welcome" component={Welcome} initialParams={{ needLogin: false }} />
                    <AppRouterStack.Screen name="Login" component={Login} initialParams={{ needLogin: false }} />
                </AppRouterStack.Navigator>
            }
        </NavigationContainer>
    );
}

export default NavigationContainerComponents;