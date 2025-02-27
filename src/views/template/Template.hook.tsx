import { useEffect, useState } from 'react';
import { TemplateState } from './Template.state';

function TemplateHook() {
    const [componentState, setComponentState] = useState(new TemplateState());

    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: TemplateState = componentState.copy();
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

export default TemplateHook;