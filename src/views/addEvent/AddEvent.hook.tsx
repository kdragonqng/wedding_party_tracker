import { useEffect, useState } from 'react';
import { AddEventState } from './AddEvent.state';

function AddEventHook() {
    const [componentState, setComponentState] = useState(new AddEventState());

    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: AddEventState = componentState.copy();
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

export default AddEventHook;