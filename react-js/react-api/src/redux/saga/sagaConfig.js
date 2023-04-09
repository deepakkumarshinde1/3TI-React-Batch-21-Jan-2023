import { takeLatest } from "redux-saga/effects";
import { getWeatherDetails } from "../weatherReducerSlice";
import { requestWeatherDetailsHandler } from "./requestHandler";

export function* watcherSaga() {
  yield takeLatest(getWeatherDetails.type, requestWeatherDetailsHandler);
}
