const getMonth = (year: number, month: number) => {
  const dateArr = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfSelectedMonth = new Date(year, month, 1).getDay();
  const lastDateOfSelectedMonth = new Date(year, month + 1, 0).getDate();
  const lastDateOfSelectedPrevMonth = new Date(year, month, 0).getDate();

  for (let i = firstDayOfSelectedMonth; i > 0; i--) {
    const test = lastDateOfSelectedPrevMonth - i + 1;
    dateArr.push(test.toString());
  }

  for (let i = 1; i <= lastDateOfSelectedMonth; i++) {
    dateArr.push(i.toString());
  }

  const remainderOfDivisionBySeven = dateArr.length % 7;

  if (remainderOfDivisionBySeven !== 0) {
    const blank = 7 - remainderOfDivisionBySeven;
    for (let i = 1; i <= blank; i++) {
      dateArr.push(i.toString());
    }
  }

  return dateArr;
};

export default getMonth;
