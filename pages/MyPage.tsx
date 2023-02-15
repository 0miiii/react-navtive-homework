import { StyleSheet, Text, View } from "react-native";

function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text>MypageScreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default MypageScreen;
