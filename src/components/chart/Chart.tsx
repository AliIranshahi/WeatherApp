import { LineChart } from '@mui/x-charts';
import type { OpenMeteoResponse } from '../../types/Types';
import { useTranslation } from 'react-i18next';
import { englishWeekdays, persianWeekdays } from '../../constans/WeekInfo';
import { useAuthContext } from '../../hooks/useAuthContext';



export default function Chart({ data }: { data: OpenMeteoResponse }) {
    const { i18n: { language } } = useTranslation();
    const {state} = useAuthContext();

    const xAxis = [
        {
            dataKey: 'year',
            label: '',
            scaleType: 'band',
        },
    ];

    const yAxis = [
        {
            label: '',
        },
    ];

    const series = [
        {
            dataKey: 'value',
            label: language == "fa" ? 'دما' : 'temp',
        },
    ];

    // calculate time and temp

    const dataset = data.daily.time.map((dateStr, i) => {
        const date = new Date(dateStr); // میلادی

        const day = language == "fa" ? persianWeekdays[date.getDay()] : englishWeekdays[date.getDay()] // روز هفته فارسی
        const value = Math.round(data.daily.temperature_2m_min[i]); // دمای ماکسیمم
        return { year: day, value };
    });


    // console.log(data, "+____________+");

    return (
        <div className={` rounded-[25px] ${state.color == "white" ? "bg-[#E1E9EE]" :"bg-[#292f45]"}`} dir='ltr'>
            <LineChart
            style={{
                color:"white",
                
            }}
                dataset={dataset}
                xAxis={xAxis}
                yAxis={yAxis}
                series={series}
                height={300}
                grid={{ vertical: true, horizontal: true }}
            />
        </div>
    );
}
