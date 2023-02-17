import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import getMonth from "../utils/getMonth";
import CalendarEl from "./CalendarEl";
import useSelectedDate from "../hooks/useSelectedDate";

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

function MonthlyCalendar() {
  const [selectedCalendar, setSelectedCalendar] = useState(today);
  const [selectedDate, selectedDateHandler] = useSelectedDate(selectedCalendar);
  const dayElements = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
  const calendarArr = getMonth(selectedCalendar.year, selectedCalendar.month);

  const prevBtnDateHandler = () => {
    if (selectedCalendar.month <= 0) {
      return setSelectedCalendar((prev) => {
        return {
          year: prev.year - 1,
          month: 11,
        };
      });
    }
    setSelectedCalendar((prev) => {
      return {
        ...prev,
        month: prev.month - 1,
      };
    });
  };

  const nextBtnDateHandler = () => {
    if (selectedCalendar.month >= 11) {
      return setSelectedCalendar((prev) => {
        return {
          year: prev.year + 1,
          month: 0,
        };
      });
    }
    setSelectedCalendar((prev) => {
      return {
        ...prev,
        month: prev.month + 1,
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button title="<" onPress={prevBtnDateHandler} />
        <Text>{`${selectedCalendar.month + 1} ${selectedCalendar.year}`}</Text>
        <Button title=">" onPress={nextBtnDateHandler} />
      </View>
      <View style={styles.flex}>
        {dayElements.map((dayEl) => (
          <CalendarEl key={dayEl} el={dayEl} />
        ))}
      </View>
      <View style={styles.calendarBody}>
        {calendarArr[0].map((el, idx) => (
          <TouchableOpacity key={idx} onPress={prevBtnDateHandler}>
            <CalendarEl el={el} grey />
          </TouchableOpacity>
        ))}
        {calendarArr[1].map((el, idx) => (
          <TouchableOpacity key={idx} onPress={() => selectedDateHandler(el)}>
            <CalendarEl
              el={el}
              selected={selectedDate}
              selectedCalendar={selectedCalendar}
            />
          </TouchableOpacity>
        ))}
        {calendarArr[2].map((el, idx) => (
          <TouchableOpacity key={idx} onPress={nextBtnDateHandler}>
            <CalendarEl el={el} grey />
          </TouchableOpacity>
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
  flex: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendarBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default MonthlyCalendar;
