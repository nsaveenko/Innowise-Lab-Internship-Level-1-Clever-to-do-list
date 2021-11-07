import moment from 'moment';

export const date = new Date();
export const currentDay = date.getDate();
export const year = date.getFullYear();
export const month = date.getMonth() + 1;
export const daysInMonth = moment().daysInMonth();
export const weekDays = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

export const convertToTimestamp = (day, month, year) => {
  return Date.parse(`${month}/${day}/${year}`).toString();
}