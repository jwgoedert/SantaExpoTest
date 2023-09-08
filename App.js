import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleBlock}>Starting Expo App!
    </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95f2d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock:{
    fontFamily: 'Helvetica Neue',
    fontSize:32,
  }
});
