import { View, Text, StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface Props {
  el: string;
  selected?: string;
}

const CalendarEl: React.FC<Props> = ({ el, selected }) => {
  return (
    <View
      style={[
        styles.calendarEl,
        selected === el && selected !== "" && styles.selected,
      ]}
    >
      <Text>{el}</Text>
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
});

export default CalendarEl;
