import { StyleSheet, Text, View } from "react-native";

export default function SampleCard() {
  return (
    <View style={styles.container}>
      <Text>SampleCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
