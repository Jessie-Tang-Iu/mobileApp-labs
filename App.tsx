import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
    let sampleList = [
      {id: 1, name: "Lam", github_repo: "lam-dao1320", group_no: "5"},
      {id: 2, name: "Pharadon", github_repo: "", group_no: "5"},
      {id: 3, name: "Jessie", github_repo: "Jessie-Tang-Iu", group_no: "5"},
    ]
  
  const eventHandler = () => {
    alert("I am done with the lab");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item) => (
        <Text key={item.id} style={{ fontSize: 20 }}>
          {item.name} {item.github_repo} {item.group_no}
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
