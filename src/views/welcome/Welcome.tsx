import React from "react";
import { Text, View } from "react-native";
import BaseStyle from "../../common/constants/BaseStyle";

function Welcome(): React.JSX.Element {
    // const style = WelcomeStyle();

    return (
        <View style={[BaseStyle.container, BaseStyle.centerCol]}>
            <Text>{'Welcome'}</Text>
        </View>
    );
}
export default Welcome;