import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const records = [
  { id: '1', amount: '$250', date: '2023-01-15', description: 'Groceries' },
  { id: '2', amount: '$120', date: '2023-01-18', description: 'Utilities' },
  { id: '3', amount: '$75', date: '2023-01-20', description: 'Transport' },
  // 添加更多记录
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View style={styles.menuButton}>
          <Ionicons name="menu-outline" size={24} color="#000" />
        </View>
      </View>

      <Text style={styles.greeting}>Hello, Mark!</Text>
      <Text style={styles.title}>Last year's report 💰</Text>

      <View style={styles.tabContainer}>
        <View style={styles.tabButton}>
          <Text style={styles.activeTabText}>Income</Text>
        </View>
        <View style={styles.tabButton}>
          <Text style={styles.tabText}>Expenses</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
              data: [100, 300, 150, 1250, 800, 1700]
            }]
          }}
          width={Dimensions.get("window").width - 32}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 178, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.messageCard}>
        <View style={styles.messageIcon}>
          <Ionicons name="thumbs-up" size={24} color="#000" />
        </View>
        <View>
          <Text style={styles.messageTitle}>Well done, Mark!</Text>
          <Text style={styles.messageSubtitle}>Your capital has a positive trend.</Text>
        </View>
      </View>

      <FlatList
        data={records}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <Text style={styles.recordAmount}>{item.amount}</Text>
            <View>
              <Text style={styles.recordDescription}>{item.description}</Text>
              <Text style={styles.recordDate}>{item.date}</Text>
            </View>
          </View>
        )}
        style={styles.recordList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    padding: 4,
    marginTop: 24,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
  tabText: {
    color: '#666',
  },
  chartContainer: {
    marginTop: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
  },
  messageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  messageTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  messageSubtitle: {
    color: '#999',
    marginTop: 4,
  },
  recordList: {
    marginTop: 24,
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  recordAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recordDescription: {
    fontSize: 14,
    color: '#666',
  },
  recordDate: {
    fontSize: 12,
    color: '#999',
  },
});
