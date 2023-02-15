const getCalendar = (year: number, month: number) => {
  const dateArr = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfSelectedMonth = new Date(year, month, 1).getDay();
  const lastDateOfSelectedMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayOfSelectedMonth; i++) {
    dateArr.push("");
  }
  for (let i = 1; i <= lastDateOfSelectedMonth; i++) {
    dateArr.push(i.toString());
  }

  const remainderOfDivisionBySeven = dateArr.length % 7;

  if (remainderOfDivisionBySeven !== 0) {
    const blank = 7 - remainderOfDivisionBySeven;
    for (let i = 0; i < blank; i++) {
      dateArr.push("");
    }
  }

  return dateArr;
};

export default getCalendar;
