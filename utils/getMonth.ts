type TdateArr = string[][];

const getMonth = (year: number, month: number) => {
  const dateArr: TdateArr = [[], [], []];
  const firstDayOfSelectedMonth = new Date(year, month, 1).getDay();
  const lastDateOfSelectedMonth = new Date(year, month + 1, 0).getDate();
  const lastDateOfSelectedPrevMonth = new Date(year, month, 0).getDate();

  for (let i = firstDayOfSelectedMonth; i > 0; i--) {
    const lastMonthDate = lastDateOfSelectedPrevMonth - i + 1;
    dateArr[0].push(lastMonthDate.toString());
  }

  for (let i = 1; i <= lastDateOfSelectedMonth; i++) {
    dateArr[1].push(i.toString());
  }

  const remainderOfDivisionBySeven =
    (dateArr[0].length + dateArr[1].length) % 7;

  if (remainderOfDivisionBySeven !== 0) {
    const blank = 7 - remainderOfDivisionBySeven;
    for (let i = 1; i <= blank; i++) {
      dateArr[2].push(i.toString());
    }
  }

  const dateArrLength = dateArr.reduce((acc, cur) => acc + cur.length, 0);

  if (dateArrLength / 7 === 6) {
    return dateArr;
  }

  for (let i = 0; i < 7; i++) {
    dateArr[2].push("");
  }

  return dateArr;
};

export default getMonth;
