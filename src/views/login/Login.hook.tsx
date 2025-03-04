import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';

function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());

    async function loadPage(): Promise<void> {
        const pageState: LoginState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    async function handleLoginWithFacebook() {
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