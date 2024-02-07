import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>New version</Text>
      <Image source={require('./assets/favicon.png')} style={{marginTop: 20}}/>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
