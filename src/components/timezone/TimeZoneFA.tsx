import { useEffect, useState } from "react";
import jalaali from "jalaali-js";
import { useAuthContext } from "../../hooks/useAuthContext";

interface Props {
  timestamp: number; // dt از API برای شهر انتخاب شده
  timezone: number;  // timezone از API برای همون شهر به ثانیه
}

const PersianDateTime = ({ timestamp, timezone }: Props) => {
  const [time, setTime] = useState(() => new Date((timestamp + timezone) * 1000));
  const {state} = useAuthContext();

  useEffect(() => {
    if (!timestamp || timezone === undefined) return;

    const interval = setInterval(() => {
      const localMillis = (timestamp + timezone) * 1000;
      setTime(new Date(localMillis));
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp, timezone]);

  if (!time) return null;

  // تبدیل میلادی به شمسی
  const { jy, jm, jd } = jalaali.toJalaali(time);

  // روز هفته فارسی
  const weekdays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
  const day = weekdays[time.getDay()];

  // ساعت و دقیقه ۱۲ ساعته + AM/PM
  let hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="flex flex-col text-right mt-5">
      <span className={`f-f-vazir-medium  ${state.color == "white" ? "text-blue-950" : "text-white"} text-[25px]`}>{day}</span>
      <div className={`flex gap-5 f-f-vazir-medium text-[15px]  ${state.color == "white" ? "text-blue-900" : "text-white"}`}>
        <span>{jy}/{jm}/{jd}</span>
        <span>{hoursStr}:{minutesStr} {ampm}</span>
      </div>
    </div>
  );
};

export default PersianDateTime;
