
// import Pres from './components/Pres';
import { StyleSheet, View, Text } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    {/* <Pres/> */}
        <Text>Ma première application à la MANU</Text>
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
