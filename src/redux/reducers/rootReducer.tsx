import { combineReducers } from "redux";

import TodayWeatherReducer from "./weatherReducer/todayWeather.reducer";
import TomorrowWeatherReducer from "./weatherReducer/tomorrowWeather.reducer";
import FutureWeatherReducer from "./weatherReducer/futureWeather.reducer";

 
export const rootReducers = combineReducers(
    { 
        todayWeather: TodayWeatherReducer,
        tomorrowWeather: TomorrowWeatherReducer ,
        futureWeather: FutureWeatherReducer
    },
)