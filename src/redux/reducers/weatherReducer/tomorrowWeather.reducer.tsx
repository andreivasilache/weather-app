import {FETCH_SUCCESSFUL_TOMORROW,FETCH_PENDING_TOMORROW,FETCH_ERROR_TOMORROW} from '../../actions/httpActions/http.const';

const initialState = {
    tomorrowWeather: []
}

export default function TomorrowWeatherReducer(state = initialState, action: {type:string, payload: any}){
    switch(action.type){
            case FETCH_SUCCESSFUL_TOMORROW:
                return state;
            case FETCH_PENDING_TOMORROW:
                console.log('Fetching fetch', state);
                return state;
            case FETCH_ERROR_TOMORROW:
                console.log('Fetching fetch', state);
                return state;
            default:
                return state;
        }
}