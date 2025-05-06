import { useEffect, useState } from 'react';
import { SettingState } from './Setting.state';

function SettingHook() {
    const [componentState, setComponentState] = useState(new SettingState());

    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: SettingState = componentState.copy();
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

export default SettingHook;