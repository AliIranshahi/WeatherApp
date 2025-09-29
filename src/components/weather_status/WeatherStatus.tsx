import { WeatherStatusInfo } from '../../constans/WeatherStatusInfo';
import type { WeatherResponse } from '../../types/Types'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersianDateTime from '../timezone/TimeZoneFA';
import { WeatherTranslate } from '../../constans/WeatherTranslate';
import { CityTranslate } from '../../constans/CityTranslate';
import { useTranslation } from 'react-i18next';
import EnglishDateTime from '../timezone/TimeZoneEN';
import { useAuthContext } from '../../hooks/useAuthContext';

function WeatherStatus({ data }: { data: WeatherResponse }) {
    const { i18n: { dir, language, t } } = useTranslation();
    const {state} = useAuthContext();

    return (
        <div className={`w-full h-full ] flex justify-between p-7 rounded-[25px] weather ${state.color == "white" ? 'bg-[#E1E9EE]' : 'bg-[#292f45] text-white'}`} dir={dir()}>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    {
                        WeatherStatusInfo({ id: data.weather?.[0].id })
                    }
                </div>
                <div className={`f-f-vazir-medium  w-full ${state.color == "white" ? "text-blue-900 " : "text-white"} ${language == "fa" ? "text-right" : "text-left"}`}>
                    {
                        language == "fa" ?
                            WeatherTranslate({ name: data.weather?.[0].main })
                            :
                            data.weather?.[0].main
                    }
                </div>
                <div className={`f-f-vazir-regular w-41  text-[15px] ${language == "fa" ? "text-right" : "text-left"}`}>
                    {/* conver to santigerad */}
                    {
                        language == "fa" ? Math.round((data.main.temp - 273.15)).toLocaleString("fa-IR") + " " : Math.round((data.main.temp - 273.15)).toLocaleString("en") + " "
                    }
                    {
                        t("TempPanel")
                    }

                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-gray-700 flex items-center justify-center f-f-vazir-medium text-[17px] bg-[#cdd9e0] px-12 py-3 rounded-full gap-2 max-w-[250px]  ' >

                    <span className='mt-1 whitespace-nowrap overflow-hidden'>
                        {
                            language == "fa" ?
                                CityTranslate({ name: data.name })
                                :
                                data.name
                                
                        }

                    </span>
                    <LocationOnIcon fontSize='large' />
                </div>

                {
                    language == "fa" ? <PersianDateTime
                        timestamp={data.dt}
                        timezone={data.timezone}
                    /> : <EnglishDateTime timestamp={data.dt}
                        timezone={data.timezone} />
                }



            </div>
        </div>
    )
}

export default WeatherStatus