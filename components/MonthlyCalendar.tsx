import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import getMonth from "../utils/getMonth";
import CalendarEl from "./CalendarEl";

const currentDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

function MonthlyCalendar() {
  const dayElements = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selected, setSelected] = useState("");
  const calendarArr = getMonth(selectedDate.year, selectedDate.month);

  const selectedHandler = (el: string) => {
    setSelected(el);
  };

  const prevBtnDateHandler = () => {
    if (selectedDate.month <= 0) {
      return setSelectedDate((prev) => {
        return {
          year: prev.year - 1,
          month: 11,
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
    if (selectedDate.month >= 11) {
      return setSelectedDate((prev) => {
        return {
          year: prev.year + 1,
          month: 0,
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

  useEffect(() => {
    setSelected("");
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button title="<" onPress={prevBtnDateHandler} />
        <Text>{`${selectedDate.month + 1} ${selectedDate.year}`}</Text>
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
          <TouchableOpacity key={idx} onPress={() => selectedHandler(el)}>
            <CalendarEl el={el} selected={selected} />
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
