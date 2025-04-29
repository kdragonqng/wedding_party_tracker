import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';
import { GoogleSignin } from
    '@react-native-google-signin/google-signin';
import { useAuth } from '../../contexts/AuthContext';
import { StorageService } from '../../services/logic/storageService';
import { container } from 'tsyringe';
import { StorageKey } from '../../common/constants/storageKey';
import { AuthObject } from '../../types/authType';
import { mapSignInResponseToAuthObject } from '../../utils/utils';


function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());
    const storageService = container.resolve(StorageService);
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
            await GoogleSignin.revokeAccess();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                const authCookie = mapSignInResponseToAuthObject(userInfo);
                await storageService.save<AuthObject>(StorageKey.authObject, authCookie);
                auth.handleIsAuthenticated(true);
            }
        } catch (error) {
            // auth.handleIsAuthenticated(false);
            console.log('Login error', error);
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