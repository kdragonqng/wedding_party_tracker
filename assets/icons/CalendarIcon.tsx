// Sử dụng SVGR chuyển sang component, sau đó sửa lại như sau:
import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const CalendarIcon = (props: { width: number; height: number; fill: ColorValue | undefined }) => (
    <Svg width={props.width || 25} height={props.height || 25} viewBox="0 0 25 25" fill="none">
        <Path
            d="M2.26562 6.5C2.26562 5.25736 3.27298 4.25 4.51563 4.25H19.5156C20.7583 4.25 21.7656 5.25736 21.7656 6.5V20C21.7656 21.2426 20.7583 22.25 19.5156 22.25H4.51563C3.27298 22.25 2.26562 21.2426 2.26562 20V6.5Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Circle cx="13.8906" cy="11.375" r="1.125" fill={props.fill} />
        <Circle cx="17.6406" cy="11.375" r="1.125" fill={props.fill} />
        <Circle cx="13.8906" cy="15.125" r="1.125" fill={props.fill} />
        <Circle cx="17.6406" cy="15.125" r="1.125" fill={props.fill} />
        <Circle cx="6.39062" cy="15.125" r="1.125" fill={props.fill} />
        <Circle cx="10.1406" cy="15.125" r="1.125" fill={props.fill} />
        <Circle cx="6.39062" cy="18.875" r="1.125" fill={props.fill} />
        <Circle cx="10.1406" cy="18.875" r="1.125" fill={props.fill} />
        <Circle cx="13.8906" cy="18.875" r="1.125" fill={props.fill} />
        <Path
            d="M6.01562 2.75V4.25M18.0156 2.75V4.25"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M21.7656 8H2.26562"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
    </Svg>
);

export default CalendarIcon;