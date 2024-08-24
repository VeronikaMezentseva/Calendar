import moment from "moment";

const now = moment();
const curMonth = moment().format("MMMM");
const curDay = moment().clone().date();

const firstDayOfMonth = now.clone().startOf("month");

const firstDayOfWeek = firstDayOfMonth.isoWeekday();
const daysInMonth = [];

const daysInCurrentMonth = now.clone().daysInMonth();

for (let i = 0; i < daysInCurrentMonth; i++) {
  const dayDate = firstDayOfMonth.clone().add(i, "days");
  daysInMonth.push(dayDate);
}

const lastWeekdayOfMonth = daysInMonth.slice(-1)[0].isoWeekday();

// -----------------определеяем прошлые месяцы----------------------------

const prevMonth = now.clone().subtract(1, 'months');
const daysAmountInPrevMonth = prevMonth.daysInMonth();
const firstDayOfPrevMonth = prevMonth.clone().startOf("month");
const firstDayOfPrevMonthWeek = firstDayOfPrevMonth.day();
const daysInPrevMonth = [];

for (let i = 0; i < daysAmountInPrevMonth; i++) {
  const dayDate = firstDayOfPrevMonth.clone().add(i, "days");

  daysInPrevMonth.push(dayDate);
}

const daysToAddOfPrevMonth = firstDayOfWeek - 1;
const daysToAddOfPrevMonthArr = daysInPrevMonth.slice(-daysToAddOfPrevMonth);

// ---------------------дни из будущего месяца-------------------------------------

const nextMonth = now.clone().add(1, 'months');
nextMonth.isoWeekday();
const daysAmountInNextMonth = nextMonth.daysInMonth();
const firstDayOfNextMonth = nextMonth.clone().startOf("month");
const firstDayOfNextMonthWeek = firstDayOfNextMonth.isoWeekday();
const daysInNextMonth = [];

for (let i = 0; i < daysAmountInNextMonth; i++) {
  const dayDate = firstDayOfNextMonth.clone().add(i, "days");
  daysInNextMonth.push(dayDate);
};

const daysToAddOfNextMonth = 7 - lastWeekdayOfMonth;
const daysToAddOfNextMonthArr = daysInNextMonth.slice(0, daysToAddOfNextMonth);


export const dateState = {
  now: now,
  daysInMonth: daysInMonth,
  daysToAddOfPrevMonthArr: daysToAddOfPrevMonthArr,
  daysToAddOfNextMonthArr: daysToAddOfNextMonthArr,
  firstDayOfWeek: firstDayOfWeek
}