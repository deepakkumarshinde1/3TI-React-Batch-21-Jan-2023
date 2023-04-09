import { createSlice } from "@reduxjs/toolkit";

const WeatherReducerSlice = createSlice({
  name: "weather",
  initialState: {
    weatherList: [],
    weatherDetails: null,
  },
  reducers: {
    setWeatherDetails: (state, action) => {
      state.weatherDetails = action.payload;
    },
    setWeatherList: (state, action) => {
      let { isFound, data } = action.payload;
      if (isFound === undefined)
        state.weatherList = [...state.weatherList, { ...data }];
      else {
        let _weatherList = [...state.weatherList];
        _weatherList[isFound] = { ...data };
        state.weatherList = _weatherList;
      }
    },
    saveWeatherData: (state, action) => {
      console.log(action.payload);
    },
    getWeatherDetails: () => {},
  },
});

export default WeatherReducerSlice;

export const {
  setWeatherDetails,
  setWeatherList,
  saveWeatherData,
  getWeatherDetails,
} = WeatherReducerSlice.actions;
