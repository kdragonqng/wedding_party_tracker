import React, { Fragment } from 'react';
import HomeHook from './Home.hook';
import HomeStyle from './Home.style';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LanguageCode } from 'one-frontend-framework';

function Home(): React.JSX.Element {
    const elHook = HomeHook();
    const homeStyle = HomeStyle();


    if (elHook) {
        return (
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={homeStyle.default}>
                        {elHook.lang.text?.menu?.home}
                    </Text>
                    <View>
                        <Button title='Vietnamese' onPress={() => elHook.changeLanguage(LanguageCode.VI)}></Button>
                        <Button title='English' onPress={() => elHook.changeLanguage(LanguageCode.EN)}></Button>
                        <Button title='Logout' onPress={() => elHook.logOut()}></Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    } else {
        return (
            <Fragment></Fragment>
        );
    }
}

export default Home;
