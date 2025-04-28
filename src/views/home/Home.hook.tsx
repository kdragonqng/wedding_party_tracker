import { useEffect, useState } from 'react';
import { HomeState } from './Home.state';
import LanguageHook from '../../common/hook/LanguageHook';
import { StorageService } from '../../services/logic/storageService';
import { StorageKey } from '../../common/constants/storageKey';
import { container } from 'tsyringe';
import { useAuth } from '../../contexts/AuthContext';

function HomeHook() {
    const [componentState, setComponentState] = useState(new HomeState());
    const lang = LanguageHook();
    const storageService = container.resolve(StorageService);
    const auth = useAuth();

    async function changeLanguage(language: string): Promise<void> {
        await lang.changeLanguage(language);
    }

    async function logOut(): Promise<void> {
        await storageService.remove(StorageKey.authObject);
        auth.handleIsAuthenticated(false);
    }
    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: HomeState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        loadPage();
    }, []);
    return {
        componentState,
        changeLanguage,
        lang,
        logOut
    };
}

export default HomeHook;