import React from "react";
import { Text, View } from "react-native";
import BaseStyle from "../../common/constants/BaseStyle";
import WelcomeHook from "./Welcome.hook";

function Welcome(): React.JSX.Element {
    const elHook = WelcomeHook();
    if (elHook) {
        return (
            <View style={[BaseStyle.container, BaseStyle.centerCol]}>
                <Text>{'Welcome'}</Text>
            </View>
        );
    } else {
        return <View></View>;
    }

}
export default Welcome;