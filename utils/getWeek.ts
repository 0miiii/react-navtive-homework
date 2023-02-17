const getWeek = (page: number) => {
  const today = new Date();
  today.setDate(today.getDate() + 7 * page);
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const dayOfWeek = today.getDay();

  const selectedWeek: { year: string; month: string; week: string[] } = {
    year: year.toString(),
    month: (month + 1).toString(),
    week: [],
  };

  for (var i = 0; i < 7; i++) {
    const day = new Date(year, month, date + (i - dayOfWeek));
    selectedWeek.week.push(day.getDate().toString());
  }

  return selectedWeek;
};

export default getWeek;
