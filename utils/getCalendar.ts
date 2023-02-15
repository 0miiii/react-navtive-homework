const getCalendar = () => {
  const dateArr = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfSelectedMonth = 2;
  const lastDateOfSelectedMonth = 31;

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
