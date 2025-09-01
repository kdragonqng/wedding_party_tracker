import React, { Fragment, useState } from 'react';
import HomeHook from './Home.hook';
import HomeStyle from './Home.style';
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import Header from '../../common/components/Header/Header';
import { EventObject, EventType } from '../../common/types/eventType';
import BaseStyle from '../../common/constants/BaseStyle';

function Home(): React.JSX.Element {
    const elHook = HomeHook();
    const homeStyle = HomeStyle();

    const tabLabels = {
        [EventType.ALL]: 'Tất cả',
        [EventType.WEDDING]: 'Cưới',
        [EventType.BIRTHDAY]: 'Sinh nhật',
        [EventType.OTHER]: 'Khác',
    };

    const eventTypes = [
        EventType.ALL,
        EventType.WEDDING,
        EventType.BIRTHDAY,
        EventType.OTHER,
    ];

    const [selectedTab, setSelectedTab] = useState<EventType>(EventType.ALL);
    const data: EventObject[] = [
        {
            id: '1',
            time: '16:00',
            date: '29-04-2026',
            title: 'Đám cưới Hải Long',
            location: 'Nhà hàng ABC',
            imgUrl: 'https://picsum.photos/200',
            amount: 5000000,
            currency: 'VNĐ'
        },
        {
            id: '2',
            time: '16:00',
            date: '29-04-2026',
            title: 'Sinh Nhật Hải Long',
            location: 'Nhà hàng ABC',
            imgUrl: 'https://picsum.photos/200',
            amount: 5000000,
            currency: 'VNĐ'
        },
        {
            id: '3',
            time: '16:00',
            date: '29-04-2026',
            title: 'Sinh Nhật Hải Long',
            location: 'Nhà hàng ABC',
            imgUrl: 'https://picsum.photos/200',
            amount: 5000000,
            currency: 'VNĐ'
        },
        {
            id: '4',
            time: '16:00',
            date: '29-04-2026',
            title: 'Sinh Nhật Hải Long',
            location: 'Nhà hàng ABC',
            imgUrl: 'https://picsum.photos/200',
            amount: 5000000,
            currency: 'VNĐ'
        },
        {
            id: '5',
            time: '16:00',
            date: '29-04-2026',
            title: 'Sinh Nhật Hải Long',
            location: 'Nhà hàng ABC',
            imgUrl: 'https://picsum.photos/200',
            amount: 5000000,
            currency: 'VNĐ'
        },
    ];

    const renderItem = ({ item }: { item: EventObject }) => {
        return (
            <View style={{ backgroundColor: '#1e1e1e', padding: 16, flexDirection: 'row', marginHorizontal: 16, borderRadius: 12 }}>
                <View style={{ flex: 1, }}>
                    <Text style={{ color: '#D1D5DB', fontSize: 14 }}>{item.date} • {item.time}</Text>
                    <View style={{ height: 8 }} />
                    <Text style={{ color: '#D1D5DB', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ height: 8 }} />
                    <Text style={{ color: '#9CA3AF', fontSize: 14 }}>Địa điểm: {item.location}</Text>
                    <View style={{ height: 8 }} />
                    <Text style={{ color: '#FFD700', fontSize: 16, fontWeight: 'bold' }}>{item.amount} {item.currency}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ height: 56, width: 56 }}>
                        <Image style={BaseStyle.defaultImgStyle} source={{ uri: 'https://picsum.photos/200' }} />
                    </View>
                </View>
            </View>
        );
    };

    if (elHook) {
        return (
            <SafeAreaView style={{ backgroundColor: '#121212', flex: 1, }}>
                <Header title={'Sổ Ghi Chú Sự Kiện'} />
                <View
                    style={homeStyle.totalContainer}>
                    <Text style={homeStyle.totalStyle}>Tổng chi: 12.500.000 VNĐ</Text>
                    <Text style={homeStyle.updateStyle}>Cập nhật gần nhất: 15/07/2023</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 16 }}>
                    {eventTypes.map((type) => (
                        <View
                            key={type}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                onPress={() => setSelectedTab(type)}
                                style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 16,
                                    borderRadius: 20,
                                    backgroundColor: selectedTab === type ? '#FFD700' : '#1e1e1e',
                                    color: selectedTab === type ? '#121212' : '#D1D5DB',
                                    fontWeight: selectedTab === type ? 'bold' : 'normal',
                                }}
                            >
                                {tabLabels[type]}
                            </Text>
                        </View>
                    ))}
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 32 }} // Thêm dòng này
                />
            </SafeAreaView>
        );
    } else {
        return (
            <Fragment></Fragment>
        );
    }
}

export default Home;
