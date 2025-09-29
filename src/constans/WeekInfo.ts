export function getPersianWeekday(dateInput: string | Date) {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const weekdays = [
    "یکشنبه", // Sunday
    "دوشنبه", // Monday
    "سه‌شنبه", // Tuesday
    "چهارشنبه", // Wednesday
    "پنجشنبه", // Thursday
    "جمعه", // Friday
    "شنبه", // Saturday
  ];

  return weekdays[date.getDay()];
}
export function getEnglishWeekDay(dateInput: string | Date) {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[date.getDay()];
}

export const persianWeekdays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
  "شنبه",
];
export const englishWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
