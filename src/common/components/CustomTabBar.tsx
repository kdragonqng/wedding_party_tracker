// /* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// export default function CustomTabBarIcon({ state, descriptors, navigation }: BottomTabBarProps): React.JSX.Element | null {
//     const focusedOptions = descriptors[state.routes[state.index].key].options;

//     if (focusedOptions.tabBarVisible === false) {
//         return null;
//     }

//     return (
//         <View style={{ flexDirection: 'row' }}>
//             {state.routes.map((route: { key: string | number; name: any }, index: any) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: String(route.key),
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name);
//                     }
//                 };

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: String(route.key),
//                     });
//                 };

//                 return (
//                     <TouchableOpacity
//                         accessibilityRole="button"
//                         accessibilityState={isFocused ? { selected: true } : {}}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTestID}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         style={{ flex: 1 }}
//                     >
//                         <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                             {label}
//                         </Text>
//                     </TouchableOpacity>
//                 );
//             })}
//         </View>
//     );
// }

// // ...
