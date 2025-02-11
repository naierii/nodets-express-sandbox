export default (startDate: Date, endDate: Date, holidays?: Date[]): number => {
  if (endDate < startDate) {
    console.error("Your startDate is greater than the endDate");
    return 0;
  }

  let workingDaysCount = 0;

  // I created a copy so the parameter value will not change
  const startDateCopy = new Date(startDate);

  // To consider - Performance can possibly be enhanced.
  // Currently converting a date to string and I may not have to.
  const holidaysStr: string[] = holidays
    ? holidays?.map((holiday) => holiday.toString())
    : [];

  if (
    [startDate.toString(), endDate.toString(), ...holidaysStr].includes(
      "Invalid Date"
    )
  ) {
    console.error("Parameter contains Invalid Date");
    return 0;
  }

  /**
   * While Loop while startDate <= endDate
   *  Checking the day of each day then add 1 day on every loop
   *    NOTE - !REVERSED
   *    Check if weekend
   *  Check if holiday
   *  Add ++ in a workingDaysCount variable outside the loop
   *
   */
  while (startDateCopy <= endDate) {
    const weekendsList = [0, 6];
    const isWeekend = weekendsList.includes(startDateCopy.getDay());
    const isHoliday = holidaysStr.includes(startDateCopy.toString());

    if (!isWeekend && !isHoliday) {
      workingDaysCount++;
    }

    const nextDate = startDateCopy.getDate() + 1;
    startDateCopy.setDate(nextDate);
  }

  return workingDaysCount;
};
