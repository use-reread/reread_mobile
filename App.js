import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import SampleCard from "./components/SampleCard";
import {styles} from "./styles/style"

export default function App() {
  return (
    <View style={styles.card}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => alert("Hello Russworld!")} title="Press Me" />
      <SampleCard />
      <StatusBar style="auto" />
    </View>
  );
}
