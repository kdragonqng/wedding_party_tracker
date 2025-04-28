import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';
import { GoogleSignin, statusCodes } from
    '@react-native-google-signin/google-signin';
import { AppRouteParamList } from '../../../AppRouters';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';


function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());
    const navigation = useNavigation<NavigationProp<AppRouteParamList>>();
    const auth = useAuth();

    async function loadPage(): Promise<void> {
        const pageState: LoginState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    async function handleLoginWithFacebook() {
        auth.handleIsAuthenticated(true);
    }

    async function handleLoginWithGoogle() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await GoogleSignin.revokeAccess();
            if (userInfo) {
                console.log(userInfo);
                auth.handleIsAuthenticated(true);
            }
        } catch (error) {
            if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if ((error as any) === statusCodes.IN_PROGRESS) {
                console.log(error);
            } else if ((error as any) === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        loadPage();
    }, []);

    return {
        componentState,
        handleLoginWithFacebook,
        handleLoginWithGoogle
    };
}

export default LoginHook;