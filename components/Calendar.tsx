import { StyleSheet, Text, View, Button } from "react-native";

const CalendarEl: React.FC<{ el: string }> = ({ el }) => {
  return (
    <View>
      <Text>{el}</Text>
    </View>
  );
};

function Calendar() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return (
    <View style={styles.container}>
      <View style={styles.calendarNav}>
        <Button title="<" />
        <Text>{`${currentMonth} ${currentYear}`}</Text>
        <Button title=">" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarNav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default Calendar;
