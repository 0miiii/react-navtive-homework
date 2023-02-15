import { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import getCalendar from "../utils/getCalendar";

const CalendarEl: React.FC<{ el: string }> = ({ el }) => {
  return (
    <View style={styles.calendarEl}>
      <Text>{el}</Text>
    </View>
  );
};

const currentDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

const screenWidth = Dimensions.get("window").width;

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const calendarArr = getCalendar(selectedDate.year, selectedDate.month);

  const prevBtnDateHandler = () => {
    if (selectedDate.month <= 1) {
      return setSelectedDate((prev) => {
        return {
          year: prev.year - 1,
          month: 12,
        };
      });
    }
    setSelectedDate((prev) => {
      return {
        ...prev,
        month: prev.month - 1,
      };
    });
  };

  const nextBtnDateHandler = () => {
    if (selectedDate.month >= 12) {
      return setSelectedDate((prev) => {
        return {
          year: prev.year + 1,
          month: 1,
        };
      });
    }
    setSelectedDate((prev) => {
      return {
        ...prev,
        month: prev.month + 1,
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarNav}>
        <Button title="<" onPress={prevBtnDateHandler} />
        <Text>{`${selectedDate.month + 1} ${selectedDate.year}`}</Text>
        <Button title=">" onPress={nextBtnDateHandler} />
      </View>
      <View style={styles.calendarBody}>
        {calendarArr.map((el, idx) => (
          <CalendarEl key={idx} el={el} />
        ))}
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
  calendarBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  calendarEl: {
    width: screenWidth / 7,
    borderWidth: 1,
  },
});

export default Calendar;
