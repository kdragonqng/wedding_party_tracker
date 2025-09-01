import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/home/Home';
import React from 'react';
import Profile from '../views/profile/Profile';
import AddEvent from '../views/addEvent/AddEvent';
import Setting from '../views/setting/Setting';

import HomeIcon from '../../assets/icons/HomeIcon.tsx';
import StatisticIcon from '../../assets/icons/StatisticIcon.tsx';
import AddIcon from '../../assets/icons/AddIcon.tsx';
import CalendarIcon from '../../assets/icons/CalendarIcon.tsx';
import ProfileIcon from '../../assets/icons/ProfileIcon.tsx';

const MainTab = createBottomTabNavigator();

function Tabs(): React.JSX.Element {
    return (
        <MainTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#1e1e1e',
                    borderTopColor: '#1F2937'
                },
                tabBarActiveTintColor: '#FFD700',
            }}
            initialRouteName="Home"
        >
            <MainTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
            <MainTab.Screen
                name="Statistic"
                component={Profile}
                options={{
                    tabBarLabel: 'Thống kê',
                    tabBarIcon: ({ color, size }) => (
                        <StatisticIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
            <MainTab.Screen
                name="AddEvent"
                component={AddEvent}
                options={{
                    tabBarLabel: 'Thêm sự kiện',
                    tabBarIcon: ({ color, size }) => (
                        <AddIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
            <MainTab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Lịch',
                    tabBarIcon: ({ color, size }) => (
                        <CalendarIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
            <MainTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
        </MainTab.Navigator>
    );
}

export default Tabs;