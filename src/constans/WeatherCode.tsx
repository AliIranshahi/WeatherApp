const weatherCodeMap: Record<number, string> = {
  0: "صاف",
  1: "ابری",
  2: "ابری",
  3: "بارانی",
  45: "مه‌آلود",
  48: "مه‌آلود",
  51: "بارانی",
  53: "بارانی",
  55: "بارانی",
  56: "بارانی",
  57: "بارانی",
  61: "بارانی",
  63: "بارانی",
  65: "بارانی",
  66: "بارانی",
  67: "بارانی",
  71: "برفی",
  73: "برفی",
  75: "برفی",
  77: "برفی",
  80: "بارانی",
  81: "بارانی",
  82: "بارانی",
  85: "برفی",
  86: "برفی",
  95: "رعدوبرق",
  96: "رعدوبرق",
  99: "رعدوبرق",
};
const weatherImageMap: Record<string, string> = {
  "صاف": "../assets/images/sunS.png",
  "ابری": "../assets/images/suncloudS.png",
  "بارانی": "../assets/images/rainS.png",
  "برفی": "../assets/images/rainS.png",
  "مه‌آلود": "../assets/images/suncloudS.png",
  "رعدوبرق": "../assets/images/thunderS.png",
};

export function GetWeatherCode(code: number) {
  const weatherText = weatherCodeMap[code];
  const imageSrc = weatherImageMap[weatherText];
  if (imageSrc) {
    return <img src={imageSrc} alt={weatherText} className={`${ weatherText == "ابری" || weatherText == "مه‌آلود"  ? "w-40!" : "w-20! mt-5"} ${weatherText == "صاف"  ? "w-15!" : ""}`}/>
  }

}
