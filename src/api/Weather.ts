import axios from "axios";

const clinet = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
const forcast = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});
async function Weather({ lat, lon }: { lat: string; lon: string }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data: weather } = await clinet(
    `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  const { data: forcastOption } = await forcast.get(
    `?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
  );

  return { forcastOption, weather };
}

export default Weather;
