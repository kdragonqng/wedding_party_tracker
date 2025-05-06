import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/home/Home';
import React from 'react';
import Profile from '../views/profile/Profile';
import { BorderRadius } from '../common/constants/BorderRadius';
import { Image, View } from 'react-native';
import AddEvent from '../views/addEvent/AddEvent';
import Setting from '../views/setting/Setting';


const MainTab = createBottomTabNavigator();

function Tabs(): React.JSX.Element {

    return (
        <MainTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 32,
                    borderRadius: BorderRadius.br1000,
                    backgroundColor: '#212529',
                    borderTopWidth: 0.5,
                    height: 80,
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarIconStyle: {
                    marginTop: 20, // tránh bị lệch lên
                },
            }}
            initialRouteName="Home" >
            <MainTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            padding: 10,
                            borderRadius: BorderRadius.br1000,
                            backgroundColor: focused ? '#fff' : 'transparent',
                        }}>
                            <Image
                                source={focused ? require('../../assets/icons/home_black.png') : require('../../assets/icons/home_white.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    ),
                }}
            />

            <MainTab.Screen name="AddEvent" component={AddEvent}
                options=
                {{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            padding: 10,
                            borderRadius: BorderRadius.br1000,
                            backgroundColor: focused ? '#fff' : 'transparent',
                        }}>
                            <Image
                                source={focused ? require('../../assets/icons/note_add_black.png') : require('../../assets/icons/note_add_white.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <MainTab.Screen name="Setting" component={Setting}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            padding: 10,
                            borderRadius: BorderRadius.br1000,
                            backgroundColor: focused ? '#fff' : 'transparent',
                        }}>
                            <Image
                                source={focused ? require('../../assets/icons/setting_black.png') : require('../../assets/icons/setting_white.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <MainTab.Screen name="Profile" component={Profile}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            padding: 10,
                            borderRadius: BorderRadius.br1000,
                            backgroundColor: focused ? '#fff' : 'transparent',
                        }}>
                            <Image
                                source={focused ? require('../../assets/icons/profile_black.png') : require('../../assets/icons/profile_white.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    ),
                }} />
        </MainTab.Navigator>
    );
}

export default Tabs;