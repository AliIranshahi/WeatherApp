export interface ICity {
  city: string;
  lat: number;
  lon: number;
}
export interface WeatherResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
}
export type WeatherRange = {
  range: [number, number];
  label: string;
  icon: string;
};

export interface DailyForecast {
  time: string[]; // تاریخ هر روز به صورت 'YYYY-MM-DD'
  weathercode: number[]; // کد وضعیت آب و هوا (WMO code)
  temperature_2m_max: number[]; // بیشینه دمای روزانه
  temperature_2m_min: number[]; // کمینه دمای روزانه
}

export interface OpenMeteoResponse {
  daily: DailyForecast; // بخش روزانه
  latitude: number; // عرض جغرافیایی
  longitude: number; // طول جغرافیایی
  generationtime_ms: number; // زمان پردازش درخواست (ms)
  utc_offset_seconds: number; // اختلاف زمانی با UTC
  timezone: string; // نام تایم‌زون
  timezone_abbreviation: string; // مخفف تایم‌زون
}
