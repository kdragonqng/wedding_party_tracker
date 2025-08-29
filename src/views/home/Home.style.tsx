import { StyleSheet } from "react-native";
import { BorderRadius } from "../../common/constants/BorderRadius";
import { FontSizes, FontWeights } from "../../common/constants/Fonts";

function HomeStyle() {
    return StyleSheet.create({
        fill: {
            flex: 1,
        },
        totalContainer: {
            margin: 16,
            borderColor: 'rgba(255, 215, 0, 0.3)',
            borderWidth: 1,
            borderRadius: BorderRadius.br12,
            padding: 16,
        },
        totalStyle: {
            fontSize: FontSizes.s24,
            fontWeight: FontWeights.w600,
            color: '#FFD700',
        },
        updateStyle: {
            color: '#D1D5DB',
            fontSize: FontSizes.s14,
        }

    });
};

export default HomeStyle;