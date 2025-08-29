import { StyleSheet } from "react-native";
import { FontSizes, FontWeights } from "../../constants/Fonts";

function HeaderStyle() {
    return StyleSheet.create({
        headerContainer: {
            paddingHorizontal: 16,
            paddingVertical: 20,
            flexDirection: 'row',
            backgroundColor: '#212121'
        },
        fill: {
            flex: 1,
        },
        titleStyle: {
            fontSize: FontSizes.s24,
            fontWeight: FontWeights.w600,
            color: '#FFD700',
        }
    });
}
export default HeaderStyle;