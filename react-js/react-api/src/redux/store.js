import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./combineReducer";
import { watcherSaga } from "./saga/sagaConfig";
import createSagaMiddleware from "redux-saga";

let sagaMiddleware = createSagaMiddleware();
let store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);
export default store;
