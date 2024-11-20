import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabs = [
    {
        name: 'index',
        icon: 'home-outline',
        activeIcon: 'home',
        path: '/(tabs)/'
    },
    {
        name: 'statistics',
        icon: 'stats-chart-outline',
        activeIcon: 'stats-chart',
        path: '/(tabs)/statistics'
    },
    {
        name: 'add',
        icon: 'add',
        activeIcon: 'add',
        path: '/(tabs)/add'
    },
    {
        name: 'camera',
        icon: 'camera-outline',
        activeIcon: 'camera',
        path: '/(tabs)/camera'
    },
    {
        name: 'profile',
        icon: 'person-outline',
        activeIcon: 'person',
        path: '/(tabs)/profile'
    }
];

export function CustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();
    const insets = useSafeAreaInsets();

    const isPathActive = (tabPath: string) => {
        const currentPath = pathname.replace(/^\//, '');
        const tabPathWithoutPrefix = tabPath.replace('/(tabs)/', '');

        if (tabPathWithoutPrefix === '') {
            return currentPath === '' || currentPath === 'index';
        }
        return currentPath === tabPathWithoutPrefix;
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.tabBar}>
                {tabs.map((tab) => {
                    const isActive = isPathActive(tab.path);
                    const isAddButton = tab.name === 'add';

                    return (
                        <TouchableOpacity
                            key={tab.name}
                            style={[
                                styles.tab,
                                isAddButton && styles.addButton
                            ]}
                            onPress={() => router.push(tab.path)}
                        >
                            <Ionicons
                                name={isActive ? tab.activeIcon : tab.icon}
                                size={isAddButton ? 32 : 24}
                                color={isAddButton ? '#fff' : (isActive ? '#000' : '#8E8E93')}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: -25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
}); 