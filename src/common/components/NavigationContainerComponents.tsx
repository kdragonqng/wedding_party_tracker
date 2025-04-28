import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouterStack } from '../../../AppRouters';
import Home from '../../views/home/Home';
import { AuthContext } from '../../contexts/AuthContext';
import Welcome from '../../views/welcome/Welcome';
import Login from '../../views/login/Login';

function NavigationContainerComponents(): React.JSX.Element {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {
                isAuthenticated === true &&
                <AppRouterStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <AppRouterStack.Screen name="Home" component={Home} initialParams={{ needLogin: false }} />
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