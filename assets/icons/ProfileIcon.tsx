import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props: { width?: number; height?: number; fill?: ColorValue }) => (
    <Svg width={props.width || 25} height={props.height || 25} viewBox="0 0 25 25" fill="none">
        <Path
            d="M16.5312 7.25C16.3475 9.72828 14.4687 11.75 12.4062 11.75C10.3437 11.75 8.4617 9.72875 8.28123 7.25C8.09373 4.67188 9.92185 2.75 12.4062 2.75C14.8906 2.75 16.7187 4.71875 16.5312 7.25Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Path
            d="M12.4062 14.75C8.32812 14.75 4.18905 17 3.42312 21.2469C3.33077 21.7587 3.62046 22.25 4.15624 22.25H20.6562C21.1925 22.25 21.4822 21.7587 21.3898 21.2469C20.6234 17 16.4844 14.75 12.4062 14.75Z"
            stroke={props.fill}
            strokeWidth={1.5}
        />
    </Svg>
);

export default ProfileIcon;