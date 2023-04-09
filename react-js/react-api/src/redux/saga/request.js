import axios from "axios";
const BASE_API = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "417e5e47e007f7938b48ffa2581405b0";

export function requestWeatherDetails() {
  let city = "pune";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
}
