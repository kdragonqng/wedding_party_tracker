import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const StatisticIcon = (props: { width?: number; height?: number; fill?: ColorValue }) => (
    <Svg width={props.width || 25} height={props.height || 25} viewBox="0 0 25 25" fill="none">
        <Path
            d="M3.08594 15.875C3.08594 15.6679 3.25383 15.5 3.46094 15.5H4.96094C5.16804 15.5 5.33594 15.6679 5.33594 15.875V22.625C5.33594 22.8321 5.16804 23 4.96094 23H3.46094C3.25383 23 3.08594 22.8321 3.08594 22.625V15.875Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Path
            d="M13.5859 11.375C13.5859 11.1679 13.7538 11 13.9609 11H15.4609C15.668 11 15.8359 11.1679 15.8359 11.375V22.625C15.8359 22.8321 15.668 23 15.4609 23H13.9609C13.7538 23 13.5859 22.8321 13.5859 22.625V11.375Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Path
            d="M18.8359 6.125C18.8359 5.91789 19.0038 5.75 19.2109 5.75H20.7109C20.918 5.75 21.0859 5.91789 21.0859 6.125V22.625C21.0859 22.8321 20.918 23 20.7109 23H19.2109C19.0038 23 18.8359 22.8321 18.8359 22.625V6.125Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Path
            d="M8.33594 2.375C8.33594 2.16789 8.50383 2 8.71094 2H10.2109C10.418 2 10.5859 2.16789 10.5859 2.375V22.625C10.5859 22.8321 10.418 23 10.2109 23H8.71094C8.50383 23 8.33594 22.8321 8.33594 22.625V2.375Z"
            stroke={props.fill}
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
    </Svg>
);

export default StatisticIcon;