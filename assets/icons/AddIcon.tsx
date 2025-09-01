import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';

const AddIcon = (props: { width: number; height: number; fill: ColorValue | undefined }) => (
  <Svg width={props.width || 25} height={props.height || 25} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.375 5.75V19.25M19.125 12.5H5.625"
      stroke={props.fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AddIcon;