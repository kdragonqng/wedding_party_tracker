import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export class AppScreenProps {
    public needLogin: boolean = false;
}

export type AppSreenStackParamList = {
    Welcome: AppScreenProps;
    Login: AppScreenProps;
    Home: AppScreenProps;
    MainTab: AppScreenProps;
};

export type AppRouteParamList = {
    Login: 'Login';
    Home: 'Home';
    Welcome: 'Welcome';
    MainTab: 'MainTab';
};

export type AppHomeScreenProps = NativeStackScreenProps<AppSreenStackParamList, AppRouteParamList['Home']>;

export const AppRouterStack = createNativeStackNavigator<AppSreenStackParamList>();