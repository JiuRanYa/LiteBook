import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const tabs = [
    {
        name: 'index',
        label: '账单',
        icon: 'list-outline',
        path: '/(tabs)/'
    },
    {
        name: 'add',
        label: '记账',
        icon: 'add-circle-outline',
        path: '/(tabs)/add'
    },
    {
        name: 'statistics',
        label: '统计',
        icon: 'stats-chart-outline',
        path: '/(tabs)/statistics'
    }
];

export function CustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const isActive = tab.path === pathname;

                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={styles.tab}
                        onPress={() => router.push(tab.path)}
                    >
                        <Ionicons
                            name={tab.icon}
                            size={24}
                            color={isActive ? '#007AFF' : '#8E8E93'}
                        />
                        <Text style={[
                            styles.tabLabel,
                            { color: isActive ? '#007AFF' : '#8E8E93' }
                        ]}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
    }
}); 