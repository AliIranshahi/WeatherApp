import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

interface Props {
    timestamp: number; // dt از API
    timezone: number;  // timezone از API (ثانیه)
}

const EnglishDateTime = ({ timestamp, timezone }: Props) => {
    const [time, setTime] = useState(() => new Date((timestamp + timezone) * 1000));
    const {state}  = useAuthContext();
    useEffect(() => {
        if (!timestamp || timezone === undefined) return;

        const interval = setInterval(() => {
            const localMillis = (timestamp + timezone) * 1000;
            setTime(new Date(localMillis));
        }, 1000);

        return () => clearInterval(interval);
    }, [timestamp, timezone]);

    if (!time) return null;

    // روزهای هفته انگلیسی
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = weekdays[time.getDay()];

    // تاریخ میلادی (YYYY/MM/DD)
    const year = time.getFullYear();
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const date = time.getDate().toString().padStart(2, "0");

    // ساعت و دقیقه ۱۲ ساعته + AM/PM
    let hours = time.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = time.getMinutes().toString().padStart(2, "0");

    return (
        <div className="flex flex-col text-left mt-5">
            <span className={`f-f-vazir-medium  ${state.color == "white" ? "text-blue-950" : "text-white"} text-[25px]`}>{day}</span>
            <div className={`flex gap-5 f-f-vazir-medium text-[15px]  ${state.color == "white" ? "text-blue-900" : "text-white"}`}>
                <span>{year}/{month}/{date}</span>
                <span>{hoursStr}:{minutesStr} {ampm}</span>
            </div>
        </div>
    );
};

export default EnglishDateTime;
