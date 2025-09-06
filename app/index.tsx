import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainView}>

      <Text>Main Screen</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
