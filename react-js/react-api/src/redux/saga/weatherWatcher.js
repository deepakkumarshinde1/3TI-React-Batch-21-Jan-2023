import { takeLatest } from "redux-saga/effects";
import { getProductAPI, getWeatherDetails } from "../weatherReducerSlice";
import {
  apiGetProductListHandler,
  apiGetWeatherDetailsHandler,
} from "./weatherServerHandler";

export function* apiGetWeatherDetailsWatcher() {
  yield takeLatest(getWeatherDetails.type, apiGetWeatherDetailsHandler);
}

export function* apiGetProductListWatcher() {
  yield takeLatest(getProductAPI.type, apiGetProductListHandler);
}
