import React from 'react';
import { View } from 'react-native';
import LoginHook from './Login.hook';
import BaseStyle from '../../common/constants/BaseStyle';
import { LoginButton } from 'react-native-fbsdk-next';

function Login(): React.JSX.Element {
    const elHook = LoginHook();
    // const styles = ProfileStyle();
    // const languageService = container.resolve(LanguageService);

    if (elHook) {
        return (
            <View style={BaseStyle.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <LoginButton
                        onLoginFinished={elHook.handleLoginWithFacebook}
                        onLogoutFinished={() => console.log("logout.")} />
                </View>


            </View>
        );
    } else {
        return (
            <View></View>
        );
    }
}

export default Login;
