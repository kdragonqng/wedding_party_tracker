import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

export class AppScreenProps {
    public needLogin: boolean = false;
}

export type AppSreenStackParamList = {
    Welcome: AppScreenProps;
    Login: AppScreenProps;
    Home: AppScreenProps;
};

export type AppRouteParamList = {
    Login: 'Login';
    Home: 'Home';
    Welcome: 'Welcome';
};

export type AppHomeScreenProps = NativeStackScreenProps<AppSreenStackParamList, AppRouteParamList['Home']>;

export const AppRouterStack = createStackNavigator<AppSreenStackParamList>();