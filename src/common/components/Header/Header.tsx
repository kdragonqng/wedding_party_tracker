import React from "react";
import { Text, View } from "react-native";
import HeaderStyle from "./HeaderStyle";
import { HeaderType } from "../../types/headerType";

function Header({
    title,
    // icon,
    // onPress
}: Readonly<HeaderType>): React.JSX.Element {
    const styles = HeaderStyle();
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>

    );
}

export default Header;