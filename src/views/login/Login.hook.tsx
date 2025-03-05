import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';
import { GoogleSignin, statusCodes } from
    '@react-native-google-signin/google-signin';


function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());

    async function loadPage(): Promise<void> {
        const pageState: LoginState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    async function handleLoginWithFacebook() {
    }

    async function handleLoginWithGoogle() {
        try {
            console.log('12312312');
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await GoogleSignin.revokeAccess();
            console.warn(userInfo.data?.user);
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