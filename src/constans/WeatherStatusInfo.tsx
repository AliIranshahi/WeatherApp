import type { WeatherRange } from "../types/Types";


const weatherRange: WeatherRange[] = [
  { range: [200, 232], label: "Thunderstorm", icon: "../assets/images/thunderS.png" },
  { range: [300, 321], label: "Drizzle", icon: "../assets/images/rainS.png" },
  { range: [500, 531], label: "Rain", icon: "../assets/images/rainS.png" },
  { range: [600, 622], label: "Snow", icon: "../assets/images/rainS.png" },
  { range: [701, 781], label: "Atmosphere", icon: "../assets/images/suncloudS.png" },
  { range: [800, 800], label: "Clear", icon: "../assets/images/sunS.png" },
  { range: [801, 804], label: "Cloud", icon: "../assets/images/suncloudS.png" },
]
export function WeatherStatusInfo({ id }: { id: number }) {
  if (id == 800) {
    return <><img src={weatherRange[5].icon} alt={weatherRange[5].label} className="w-35" /></>
  }

  for (const { range, label, icon } of weatherRange) {
    if (id >= range[0] && id <= range[1]) {
      return <><img src={icon} alt={label} className="w-34"/></>
    }
  }
}
