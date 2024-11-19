import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { CustomTabBar } from '@/components/CustomTabBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerShadowVisible: false,
      }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
