import type { OpenMeteoResponse } from "../../types/Types"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { GetWeatherCode } from "../../constans/WeatherCode";
import { getEnglishWeekDay, getPersianWeekday } from "../../constans/WeekInfo";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../hooks/useAuthContext";

// Import Swiper styles


function Forcast({ data }: { data: OpenMeteoResponse }) {
    const { i18n: {  language, t } } = useTranslation();
    const { time, weathercode, temperature_2m_min } = data.daily;
    const {state} = useAuthContext();


    return (
        <div className={`w-full h-full  flex flex-col justify-between p-7 rounded-[25px] ${state.color == "white"  ? "bg-[#E1E9EE] text-blue-950" : "bg-[#292f45] text-white"} ${language == "fa" ? "text-right" : "text-left"}`}>
            <h3 className="f-f-vazir-medium text-[20px] pr-4 mb-5">
                {
                    t("ForCast")
                }
            </h3>
            <div dir="rtl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        time.map((items, i) => (
                            <SwiperSlide key={i + 1} className={` rounded-[20px] overflow-hidden    p-2 min-h-[320px] pt-5 ${state.color =="white"  ? "bg-[#CDD9E0]! text-blue-950  " : "bg-[#3f4861]! text-white"}`}>
                                <div className="flex flex-col h-full justify-around " dir="">
                                    <span className="f-f-vazir-regular text-[15px] shadow-[0_4px_0px_-2px_rgba(0,0,0,0.25)] pb-1 rounded-b-[5px] w-fit mx-auto">

                                        {
                                            language == "fa" ?
                                                getPersianWeekday(items)
                                                :
                                                getEnglishWeekDay(items)
                                        }
                                    </span>

                                    <div className="flex justify-center items-center w-full">
                                        {
                                            GetWeatherCode(weathercode[i])
                                        }
                                    </div>

                                    <div className="  text-center f-f-vazir-medium text-[16px] ">
                                        {
                                           language == "fa" ?  Math.round(temperature_2m_min[i]).toLocaleString("fa-IR") + "°C" :  Math.round(temperature_2m_min[i]).toLocaleString("en") + "°C"
                                        }
                                    </div>
                                </div>

                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>



        </div>
    )
}

export default Forcast