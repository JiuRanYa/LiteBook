import { View, Text, StyleSheet } from 'react-native';

export default function StatisticsScreen() {
    return (
        <View style={styles.container}>
            <Text>统计页面</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 