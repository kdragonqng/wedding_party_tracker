import { useEffect, useState } from 'react';
import { WelcomeState } from './Welcome.state';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRouteParamList } from '../../../AppRouters';

function WelcomeHook() {
    const [componentState, setComponentState] = useState(new WelcomeState());
    const navigation = useNavigation<NavigationProp<AppRouteParamList>>();
    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: WelcomeState = componentState.copy();
        await pageState.init();
        setComponentState(pageState);

        setTimeout(() => {
            navigation.navigate('Login', 'Login');
        }, 2000);

    }

    useEffect(() => {
        // userEffect implement here
        loadPage();
    }, []);
    return {
        componentState,
    };
}

export default WelcomeHook;