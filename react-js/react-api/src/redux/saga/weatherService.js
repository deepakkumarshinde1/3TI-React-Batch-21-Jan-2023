import axios from "axios";
let API_KEY = "417e5e47e007f7938b48ffa2581405b0";

export let apiGetWeatherDetails = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
};

// axios http client library  i.e server(openWeatherMap) <=======> client(react)

export let apiGetProductList = () => {
  let url = `https://fakestoreapi.com/products`;
  return axios.get(url);
};
