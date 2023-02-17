import { useState, useEffect } from "react";

interface IselectedCalendar {
  year: number;
  month: number;
}

type Treturn = [
  selectedDate: string,
  selectedDateHandler: (date: string) => void
];

const useSelectedDate = (selectedCalendar: IselectedCalendar): Treturn => {
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
