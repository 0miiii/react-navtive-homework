import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import getWeek from "../utils/getWeek";
import CalendarEl from "./CalendarEl";
import useSelectedDate from "../hooks/useSelectedDate";

function WeeklyCalendar() {
  const [weekPage, setWeekPage] = useState(0);
  const [selectedDate, selectedDateHandler] = useSelectedDate(weekPage);
  const dayElements = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];

  const calendarArr = getWeek(weekPage).week;
  const year = getWeek(weekPage).year;
  const month = getWeek(weekPage).month;

  const prevBtnDateHandler = () => {
    setWeekPage((prevWeek) => prevWeek - 1);
  };

  const nextBtnDateHandler = () => {
    setWeekPage((prevWeek) => prevWeek + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button title="<" onPress={prevBtnDateHandler} />
        <Text>{`${month} ${year}`}</Text>
        <Button title=">" onPress={nextBtnDateHandler} />
      </View>
      <View style={styles.flex}>
        {dayElements.map((dayEl) => (
          <CalendarEl key={dayEl} el={dayEl} />
        ))}
      </View>
      <View style={styles.calendarBody}>
        {calendarArr.map((el, idx) => (
          <TouchableOpacity key={idx} onPress={() => selectedDateHandler(el)}>
            <CalendarEl el={el} selected={selectedDate} />
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

export default WeeklyCalendar;
