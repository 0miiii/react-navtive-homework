import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import getWeek from "../utils/getWeek";
import CalendarEl from "./CalendarEl";
import useSelectedDate from "../hooks/useSelectedDate";

const SCREEN_WIDTH = Dimensions.get("window").width;

console.log(SCREEN_WIDTH);

// 지난 주, 이번 주, 다음 주 3개의 화면 출력
// 가로 방향 스크롤 페이지 생성 후 한 페이지에 한 주 출력
// 현재 페이지는 이번 주
// 다음 주 페이지(페이지의 마지막)로 넘길 때 그 다음 주 페이지 생성
// 이전 페이지로 넘길 수 있고 넘길 때 아무 일도 일어나지 않음
// 이전 페이지로 넘기다가 제일 처음 페이지 도착시 일주일 앞 페이지 생성

function WeeklySlideCalendar() {
  const [onScroll, setOnScroll] = useState(false);
  const [weekPage, setWeekPage] = useState(0);
  const [selectedDate, selectedDateHandler] = useSelectedDate(weekPage);
  const [prevWeek, setPrevWeek] = useState(getWeek(weekPage - 1).week);
  const [thisWeek, setThisWeek] = useState(getWeek(weekPage).week);
  const [nextWeek, setNextWeek] = useState(getWeek(weekPage + 1).week);

  const year = getWeek(weekPage).year;
  const month = getWeek(weekPage).month;

  const handleCurrentChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // const nextCurrent: number = Math.floor(
    //   e.nativeEvent.contentOffset.x / width,
    // );
    // if (nextCurrent < 0) {
    //   return;
    // }
    // setCurrent(nextCurrent);

    console.log("==================================================");
    console.log("contentOffset", Math.floor(e.nativeEvent.contentOffset.x));
    console.log("contentSize", Math.floor(e.nativeEvent.contentSize.width));
    console.log(
      "contentInsetLeft",
      Math.floor(e.nativeEvent.contentInset.left)
    );
    console.log(
      "contentInsetRight",
      Math.floor(e.nativeEvent.contentInset.right)
    );
    console.log(
      "layoutMeasurement",
      Math.floor(e.nativeEvent.layoutMeasurement.width)
    );

    setWeekPage(weekPage + 1);
    setOnScroll(true);
  };

  // useEffect(() => {
  //   if (onScroll) {
  //     setWeek((preWeek) => {
  //       return [...preWeek, ...getWeek(weekPage).week];
  //     });
  //   }
  //   setOnScroll(false);
  // }, [weekPage]);

  return (
    <View style={styles.container}>
      <View style={styles.calendarNav}>
        <Text>{`${month + 1} ${year}`}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        // showsHorizontalScrollIndicator={false}
        // onScrollBeginDrag={handleCurrentChange}
        onScrollEndDrag={handleCurrentChange}
      >
        {thisWeek.map((el, idx) => (
          <TouchableOpacity key={idx} onPress={() => selectedDateHandler(el)}>
            <CalendarEl el={el} selected={selectedDate} />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendarWeekContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  calendarWeek: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
});

export default WeeklySlideCalendar;
