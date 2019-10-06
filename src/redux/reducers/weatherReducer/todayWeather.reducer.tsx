import {FETCH_SUCCESSFUL_TODAY,FETCH_PENDING_TODAY,FETCH_ERROR_TODAY} from '../../actions/httpActions/http.const';
import { Weather } from '../../../interfaces/weather';

const initialState = {
    isFetchigData: true,
    humidity: 0,
    pressure: 0,
    temp:0,
    temp_max:0,
    temp_min:0,
    weatherDescription:' ',
    weatherStatus:'',
    location: ''
}

export default function TodayWeatherReducer(state = initialState, action:any){
    switch(action.type){
            case FETCH_SUCCESSFUL_TODAY:
                return {
                    isFetchigData: false,
                    ...action.payload
                }
            case FETCH_PENDING_TODAY:
                return {
                    isFetchigData: true,
                    ...state
                }
            case FETCH_ERROR_TODAY:
                return state;
            default:
                return state;
        }
}