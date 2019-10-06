import { combineReducers } from "redux";

import TodayWeatherReducer from "./weatherReducer/todayWeather.reducer";
import FutureWeatherReducer from "./weatherReducer/futureWeather.reducer";

 
export const rootReducers = combineReducers(
    { 
        todayWeather: TodayWeatherReducer,
        futureWeather: FutureWeatherReducer
    },
)