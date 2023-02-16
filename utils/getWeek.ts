const getWeek = (page: number) => {
  const today = new Date();
  today.setDate(today.getDate() + 7 * page);
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const dayOfWeek = today.getDay();

  const selectedWeek = [];

  for (var i = 0; i < 7; i++) {
    const day = new Date(year, month, date + (i - dayOfWeek));
    selectedWeek.push(day.getDate().toString());
  }

  return selectedWeek;
};

export default getWeek;
