import { useState, useEffect } from "react";

type TselectedCalendar =
  | {
      year: number;
      month: number;
    }
  | number;

type Treturn = [
  selectedDate: string,
  selectedDateHandler: (date: string) => void
];

const useSelectedDate = (selectedCalendar: TselectedCalendar): Treturn => {
  const [selectedDate, setSelectedDate] = useState("");

  const selectedDateHandler = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSelectedDate("");
  }, [selectedCalendar]);

  return [selectedDate, selectedDateHandler];
};

export default useSelectedDate;
