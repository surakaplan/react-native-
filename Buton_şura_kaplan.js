import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const handleClick = () => {
    alert("merhaba");
  };
  return (
    <View style={styles.container}>
      <Button title="BUTONA BAS"onPress={() => alert("merhaba")} ></Button>
      <TouchableOpacity onPress={() => alert("şeffaf merhaba")}>
        <Text>BAS</Text>
      </TouchableOpacity>

      <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="pink"
      onPress={() => alert("basıldı!")}>
        <Text>BAS</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => alert("BASILDI")}>
      <Text>BAS</Text>
      </TouchableWithoutFeedback>
      
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
