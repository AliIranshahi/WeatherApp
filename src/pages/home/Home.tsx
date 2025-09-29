import { useEffect, useState } from "react";
import Weather from "../../api/Weather";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import WeatherStatus from "../../components/weather_status/WeatherStatus";
import type { OpenMeteoResponse, WeatherResponse } from "../../types/Types";
import Forcast from "../../components/forcast/Forcast";
import Chart from "../../components/chart/Chart";

function Home() {
    const location = useLocation()
    const [data, setData] = useState<WeatherResponse | null>(null);
    const [forcast, setForcast] = useState<OpenMeteoResponse | null>(null);


    useEffect(() => {
        (async () => {
            try {
                const search = new URLSearchParams(location.search);

                const data = await Weather({ lat: `${search.get("lat") ?? "40.4168"}`, lon: `${search.get("lon") ?? "3.7038"}` })
                // console.log(data.forcastOption);
                setData(data.weather);
                setForcast(data.forcastOption);

            } catch (error) {
                console.log(error);

            }
        })();

    }, [location])



    return (
        <>
            <Navbar />
            <main className="mt-5 px-4">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4">
                        {
                            data && <WeatherStatus data={data} />
                        }
                    </div>
                    <div className=" col-span-12 md:col-span-8">
                        {
                            forcast && <Chart data={forcast} />
                        }
                    </div>
                    <div className="col-span-12 mt-5">
                        {
                            forcast && <Forcast data={forcast} />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home