import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CalendarEl: React.FC<{ el: string }> = ({ el }) => {
  return (
    <View>
      <Text>{el}</Text>
    </View>
  );
};

const currentDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(currentDate);

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
        <Text>{`${selectedDate.month} ${selectedDate.year}`}</Text>
        <Button title=">" onPress={nextBtnDateHandler} />
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
