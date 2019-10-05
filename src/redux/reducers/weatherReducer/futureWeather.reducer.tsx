import {FETCH_SUCCESSFUL_FUTURE,FETCH_PENDING_FUTURE,FETCH_ERROR_FUTURE} from '../../actions/httpActions/http.const';

const initialState = {
    futureWeather: []
}

export default function FutureWeatherReducer(state = initialState, action: {type:string, payload: any}){
    switch(action.type){
            case FETCH_SUCCESSFUL_FUTURE:
                return state;
            case FETCH_PENDING_FUTURE:
                console.log('Fetching fetch', state);
                return state;
            case FETCH_ERROR_FUTURE:
                console.log('Fetching fetch', state);
                return state;
            default:
                return state;
        }
}