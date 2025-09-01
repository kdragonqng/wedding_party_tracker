import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = (props: { width: number; height: number; fill: ColorValue | undefined }) => (
    <Svg width={props.width || 25} height={props.height || 25} viewBox="0 0 25 25" fill="none" >
        <Path d="M4.04688 10.4375V21.5C4.04688 21.7071 4.1201 21.8839 4.26655 22.0303C4.41299 22.1768 4.58977 22.25 4.79688 22.25H9.29688V15.875C9.29688 15.5643 9.40671 15.2992 9.62638 15.0795C9.84605 14.8598 10.1112 14.75 10.4219 14.75H14.1719C14.4825 14.75 14.7477 14.8598 14.9674 15.0795C15.187 15.2992 15.2969 15.5643 15.2969 15.875V22.25H19.7969C20.004 22.25 20.1808 22.1768 20.3272 22.0303C20.4736 21.8839 20.5469 21.7071 20.5469 21.5V10.4375"
            stroke={props.fill}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path d="M22.7969 12.5L12.8073 2.93754C12.573 2.69004 12.025 2.68722 11.7864 2.93754L1.79688 12.5M19.0469 8.89066V3.50004H16.7969V6.73441"
            stroke={props.fill}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CalendarIcon;
