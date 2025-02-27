import { useEffect, useState } from 'react';
import { LoginState } from './Login.state';

function LoginHook() {
    const [componentState, setComponentState] = useState(new LoginState());

    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: LoginState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    function handleLoginWithFacebook() {
        console.log('Action', 'Login');
    }

    useEffect(() => {
        // userEffect implement here
        loadPage();
    }, []);
    return {
        componentState,
        handleLoginWithFacebook
    };
}

export default LoginHook;