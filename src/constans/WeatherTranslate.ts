const weatherLabelMap: Record<string, string> = {
  Thunderstorm: "طوفان",
  Drizzle: "باران ریز",
  Rain: "باران",
  Snow: "برف",
  Atmosphere: "مه/غبار",
  Clear: "آفتابی",
  Clouds: "ابری",
  Mist : "ابری"
};



export  function WeatherTranslate({name} : {name:string}) {
    return weatherLabelMap[name] || name
}
