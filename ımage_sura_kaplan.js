import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      resizeMode="repeat"
      style=
      {{width: '100%', 
      height: 180,
      borderWidth: 2,
      borderColor: "pink", 
    }}
      source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dekoros.com%2Fgol-kenarindaki-ev-en-iyi-manzara-duvar-kagitlari-yd-00401%2F&psig=AOvVaw1GLgc5UjIEY_xbegrs8FwD&ust=1703942292107000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiIyerdtIMDFQAAAAAdAAAAABAS'}}></Image>
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
