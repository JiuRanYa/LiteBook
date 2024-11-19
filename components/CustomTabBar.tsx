import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabs = [
    {
        name: 'index',
        label: 'Home',
        icon: 'home-outline',
        activeIcon: 'home',
        path: '/(tabs)/'
    },
    {
        name: 'add',
        label: '记账',
        icon: 'document-text-outline',
        activeIcon: 'document-text',
        path: '/(tabs)/add'
    },
    {
        name: 'statistics',
        label: '统计',
        icon: 'pie-chart-outline',
        activeIcon: 'pie-chart',
        path: '/(tabs)/statistics'
    },
    {
        name: 'settings',
        label: '设置',
        icon: 'settings-outline',
        activeIcon: 'settings',
        path: '/(tabs)/settings'
    }
];

export function CustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();
    const insets = useSafeAreaInsets();

    // 辅助函数：检查当前路径是否匹配
    const isPathActive = (tabPath: string) => {
        // 移除 '/(tabs)/' 前缀
        const currentPath = pathname.replace(/^\//, '');
        const tabPathWithoutPrefix = tabPath.replace('/(tabs)/', '');

        if (tabPathWithoutPrefix === '') {
            // 处理首页情况
            return currentPath === '' || currentPath === 'index';
        }
        return currentPath === tabPathWithoutPrefix;
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.tabBar}>
                {tabs.map((tab) => {
                    const isActive = isPathActive(tab.path);

                    return (
                        <TouchableOpacity
                            key={tab.name}
                            style={[
                                styles.tab,
                                isActive && styles.activeTab
                            ]}
                            onPress={() => router.push(tab.path)}
                        >
                            <Ionicons
                                name={isActive ? tab.activeIcon : tab.icon}
                                size={24}
                                color={isActive ? '#000' : '#8E8E93'}
                            />
                            {isActive && (
                                <Text style={styles.tabLabel}>
                                    {tab.label}
                                </Text>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 8,
        backgroundColor: 'transparent',
    },
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#F2F2F7',
        borderRadius: 30,
        paddingHorizontal: 8,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 12,
    },
    activeTab: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        marginLeft: 4,
    }
}); 