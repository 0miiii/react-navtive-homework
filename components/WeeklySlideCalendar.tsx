import { useState, useEffect, useRef } from "react";
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

const SCREEN_WIDTH = Math.floor(Dimensions.get("window").width);

console.log(SCREEN_WIDTH);

// 지난 주, 이번 주, 다음 주 3개의 화면 출력
// 가로 방향 스크롤 페이지 생성 후 한 페이지에 한 주 출력
// 현재 페이지는 이번 주 (가운데 페이지)
// 오른쪽으로 이동할 때 다음 주 페이지가 가운데로 오면서
// 이전 페이지로 넘길 수 있고 넘길 때 아무 일도 일어나지 않음
// 이전 페이지로 넘기다가 제일 처음 페이지 도착시 일주일 앞 페이지 생성

function WeeklySlideCalendar() {
  const [onScroll, setOnScroll] = useState(false);
  const [weekPage, setWeekPage] = useState(0);
  const [selectedDate, selectedDateHandler] = useSelectedDate(weekPage);

  // const prevWeek = getWeek(weekPage - 1).week;
  // const thisWeek = getWeek(weekPage).week;
  // const nextWeek = getWeek(weekPage + 1).week;
  const [prevWeek, setPrevWeek] = useState(getWeek(weekPage - 1).week);
  const [thisWeek, setThisWeek] = useState(getWeek(weekPage).week);
  const [nextWeek, setNextWeek] = useState(getWeek(weekPage + 1).week);

  const scrollRef = useRef<ScrollView>(null);
  console.log(weekPage);

  const year = getWeek(weekPage).year;
  const month = getWeek(weekPage).month;

  const handleCurrentChange = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const x = Math.floor(event.nativeEvent.contentOffset.x);
    console.log(x);
    if (x === 0) {
      console.log(x);
      setWeekPage((prev) => prev - 1);
    }
    if (x > SCREEN_WIDTH + SCREEN_WIDTH / 2 + 1) {
      console.log(x);
      setWeekPage((prev) => prev + 1);
      setOnScroll(true);
    }

    // if (x > SCREEN_WIDTH + SCREEN_WIDTH / 2) {
    //   console.log("오른쪽실행");
    //   setWeekPage((prev) => prev + 1);
    // }
    // if (x < SCREEN_WIDTH - SCREEN_WIDTH / 2) {
    //   console.log("왼쪽실행");
    //   setWeekPage((prev) => prev - 1);
    // }

    // console.log("==================================================");
    // console.log("contentOffset", Math.floor(event.nativeEvent.contentOffset.x));
    // console.log("contentSize", Math.floor(event.nativeEvent.contentSize.width));
    // console.log(
    //   "layoutMeasurement",
    //   Math.floor(event.nativeEvent.layoutMeasurement.width)
    // );
  };

  // useEffect(() => {
  //   if (onScroll) {
  //     setWeek((preWeek) => {
  //       return [...preWeek, ...getWeek(weekPage).week];
  //     });
  //   }
  //   setOnScroll(false);
  // }, [weekPage]);

  useEffect(() => {
    setPrevWeek(getWeek(weekPage - 1).week);
    setThisWeek(getWeek(weekPage).week);
    setNextWeek(getWeek(weekPage + 1).week);
  }, [weekPage]);

  useEffect(() => {
    if (scrollRef.current && scrollRef) {
      console.log("실행");
      scrollRef.current.scrollTo({
        x: SCREEN_WIDTH,
        animated: false,
      });
      setOnScroll(false);
    }
  }, [thisWeek]);

  return (
    <View style={styles.container}>
      <View style={styles.calendarNav}>
        <Text>{`${month} ${year}`}</Text>
      </View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleCurrentChange}
        contentOffset={{ x: SCREEN_WIDTH, y: 0 }}
      >
        {prevWeek.map((el, idx) => (
          <TouchableOpacity key={idx} onPress={() => selectedDateHandler(el)}>
            <CalendarEl el={el} selected={selectedDate} />
          </TouchableOpacity>
        ))}
        {thisWeek.map((el, idx) => (
          <TouchableOpacity
            style={styles.blue}
            key={idx}
            onPress={() => selectedDateHandler(el)}
          >
            <CalendarEl el={el} selected={selectedDate} />
          </TouchableOpacity>
        ))}
        {nextWeek.map((el, idx) => (
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
  blue: {
    backgroundColor: "beige",
  },
});

export default WeeklySlideCalendar;
