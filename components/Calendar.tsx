import { StyleSheet, Text, View } from "react-native";

function Calendar() {
  return (
    <View style={styles.container}>
      <Text>캘린더</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Calendar;
