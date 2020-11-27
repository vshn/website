export default function getLocaleDateNames(date) {
  return {
    weekdayShort: new Date(date).toLocaleString('en-US', { weekday: 'short' }),
    weekdayLong: new Date(date).toLocaleString('en-US', { weekday: 'long' }),
    day: new Date(date).toLocaleString('en-US', { day: 'numeric' }),
    dayMonth: new Date(date).toLocaleString('en-US', { month: 'long', day: 'numeric' }),
    year: new Date(date).toLocaleString('en-US', { year: 'numeric' }),
  };
}
