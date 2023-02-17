import { View, Text, StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface Props {
  el: string;
  selected?: string;
  grey?: boolean;
  selectedCalendar?: { year: number; month: number };
}

const CalendarEl: React.FC<Props> = ({
  el,
  selected,
  grey,
  selectedCalendar,
}) => {
  const today = new Date().getDate();
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth();

  const isToday =
    selectedCalendar?.year === todayYear &&
    selectedCalendar.month === todayMonth &&
    el === today.toString();

  return (
    <View
      style={[
        styles.calendarEl,
        selected === el && selected !== "" && styles.selected,
        isToday && styles.today,
      ]}
    >
      <Text style={grey && styles.grey}>{el}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarEl: {
    width: SCREEN_WIDTH / 7,
    height: SCREEN_WIDTH / 7,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderWidth: 1,
    borderRadius: SCREEN_WIDTH / 7 / 2,
    borderColor: "blue",
  },
  grey: {
    color: "grey",
  },
  today: {
    backgroundColor: "skyblue",
  },
});

export default CalendarEl;
