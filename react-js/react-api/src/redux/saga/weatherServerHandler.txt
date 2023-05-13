import { call, put } from "redux-saga/effects";
import { apiGetProductList, apiGetWeatherDetails } from "./weatherService";
import { saveProductList, setWeatherList } from "../weatherReducerSlice";

export function* apiGetWeatherDetailsHandler(action) {
  let { payload } = action;
  try {
    let { data } = yield call(apiGetWeatherDetails, payload.value);
    // dispatch
    yield put(setWeatherList({ data }));
  } catch (error) {
    console.log(error);
  }
}

export function* apiGetProductListHandler() {
  try {
    let { data } = yield call(apiGetProductList);
    // dispatch
    yield put(saveProductList(data));
  } catch (error) {
    console.log(error);
  }
}
