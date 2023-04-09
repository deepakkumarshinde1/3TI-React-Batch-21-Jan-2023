import { call, put } from "redux-saga/effects";
import { requestWeatherDetails } from "./request";
import { saveWeatherData } from "../weatherReducerSlice";

export function* requestWeatherDetailsHandler() {
  try {
    let response = yield call(requestWeatherDetails);
    let { data } = response;
    yield put(saveWeatherData(data));
  } catch (error) {
    console.log(error);
  }
}
