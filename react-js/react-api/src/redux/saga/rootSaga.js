import { all } from "redux-saga/effects";
import {
  apiGetProductListWatcher,
  apiGetWeatherDetailsWatcher,
} from "./weatherWatcher";

export function* rootSaga() {
  let watcherArray = [
    apiGetWeatherDetailsWatcher(),
    apiGetProductListWatcher(),
  ];
  yield all(watcherArray);
}
