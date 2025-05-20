import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
    let sampleList = [
      {id: 1, name: "John" },
      {id: 2, name: "Jane" },
      {id: 3, name: "Deo" },
      {id: 4, name: "Smith" },
    ]
  
  const eventHandler = () => {
    alert("I am done with the lab");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item) => (
        <Text key={item.id} style={{ fontSize: 20 }}>
          {item.name}
        </Text>
      ))}
      <Pressable onPress={eventHandler}>
        <Text style={styles.button}>Hello There</Text>
      </Pressable>
      <StatusBar style="auto" />
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
  button: {
    backgroundColor: '#008CBA',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 20,
  },
});
