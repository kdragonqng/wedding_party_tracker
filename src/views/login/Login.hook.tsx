import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';
import auth from '@react-native-firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from '../../config/firebaseConfig';
import { AccessToken } from 'react-native-fbsdk-next';

function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());

    if (getApps().length === 0) {
        initializeApp(firebaseConfig);
    }

    async function loadPage(): Promise<void> {
        const pageState: LoginState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    async function handleLoginWithFacebook() {
        try {
            // Once signed in, get the user AccessToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            const userCredential = await auth().signInWithCredential(facebookCredential);
            console.log('User signed in with Facebook!', userCredential.user);
        } catch (error) {
            console.log('Facebook login or Firebase credential failed:', error);
        }
    }

    useEffect(() => {
        loadPage();
    }, []);

    return {
        componentState,
        handleLoginWithFacebook
    };
}

export default LoginHook;