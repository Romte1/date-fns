import { format, addDays, subMonths, differenceInDays, startOfWeek, endOfMonth, eachDayOfInterval, parse } from 'date-fns';

// 1. Current Date and Time
const now = new Date();
console.log('Current Date:', format(now, 'dd/MM/yyyy'));
console.log('Current Time:', format(now, 'HH:mm:ss'));

// 2. Adding and Subtracting Time
const futureDate = addDays(now, 7);
console.log('Date after 7 days:', format(futureDate, 'yyyy-MM-dd'));

const pastDate = subMonths(now, 3);
console.log('Date 3 months ago:', format(pastDate, 'MMMM yyyy'));

// 3. Difference Between Dates
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-09-11');
console.log('Days between:', differenceInDays(endDate, startDate));

// 4. Weekday Calculations
console.log('Day of the week:', format(now, 'eeee'));

// 5. Date Range
const start = new Date('2024-09-01');
const end = new Date('2024-09-30');
const range = eachDayOfInterval({ start, end });
console.log('Dates in range:', range.map(date => format(date, 'yyyy-MM-dd')));

// 6. Parse
const dateString = "2024-09-11T10:30:00";
const dateFormat = "yyyy-MM-dd'T'HH:mm:ss";
const parsedDateTime = parse(dateString, dateFormat, new Date());

console.log(parsedDateTime);

const newDateFormat = format(parsedDateTime, 'dd-MM-yyyy');

console.log(newDateFormat);