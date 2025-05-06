import { useEffect, useState } from 'react';
import { ProfileState } from './Profile.state';

function ProfileHook() {
    const [componentState, setComponentState] = useState(new ProfileState());

    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: ProfileState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        loadPage();
    }, []);
    return {
        componentState,
    };
}

export default ProfileHook;