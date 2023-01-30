// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import Main from './components/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar
        animated={true}
        
        barStyle="default"
        showHideTransition="slide"        
      />
      <Main/>
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
