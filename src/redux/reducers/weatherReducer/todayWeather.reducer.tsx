import {FETCH_SUCCESSFUL_TODAY,FETCH_PENDING_TODAY,FETCH_ERROR_TODAY} from '../../actions/httpActions/http.const';

const initialState = {
    // weather : {}
}

export default function TodayWeatherReducer(state = initialState, action:any){
    switch(action.type){
            case FETCH_SUCCESSFUL_TODAY:
                return {
                   ...state,
                //    weather: [action.payload]
                }
            case FETCH_PENDING_TODAY:
                console.log('Fetching fetch', state);
                return state;
            case FETCH_ERROR_TODAY:
                console.log('Fetching error', state);
                return state;
            default:
                return state;
        }
}