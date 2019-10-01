import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer/weather.reducer";

 
export const rootReducers = combineReducers(
    { weatherReducer: WeatherReducer}
)