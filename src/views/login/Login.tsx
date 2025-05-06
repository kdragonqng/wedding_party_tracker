import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LoginHook from './Login.hook';
import BaseStyle from '../../common/constants/BaseStyle';

function Login(): React.JSX.Element {
    const elHook = LoginHook();
    // const styles = ProfileStyle();
    // const languageService = container.resolve(LanguageService);

    if (elHook) {
        return (
            <View style={BaseStyle.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <TouchableOpacity onPress={elHook.handleLoginWithFacebook}>
                        <View style={BaseStyle.primaryBtn}>
                            <Text style={BaseStyle.primaryTextBtn}>{'Login with facebook'}</Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => elHook.handleLoginWithFacebook()}>
                        <View style={BaseStyle.primaryBtn}>
                            <Text style={BaseStyle.primaryTextBtn}>{'Login with Google'}</Text>
                        </View>
                    </TouchableOpacity>
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
