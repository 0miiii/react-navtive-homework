import { useState } from "react";
import { Button } from "react-native";

import MonthlyCalendar from "../components/MonthlyCalendar";
import WeeklyCalendar from "../components/WeeklyCalendar";

const WEEKLY_CALENDAR_VIEW = "주간 캘린더 보기";
const MONTHLY_CALENDAR_VIEW = "월간 캘린더 보기";

function CalendarScreen() {
  const [calendarToggle, setCalendarToggle] = useState(false);
  const view = !calendarToggle ? WEEKLY_CALENDAR_VIEW : MONTHLY_CALENDAR_VIEW;
  const calendarToggleHandler = () => {
    setCalendarToggle(!calendarToggle);
  };

  return (
    <>
      {!calendarToggle && <MonthlyCalendar />}
      {calendarToggle && <WeeklyCalendar />}
      <Button title={view} onPress={calendarToggleHandler} />
    </>
  );
}

export default CalendarScreen;
