import {FETCH_SUCCESSFUL_FUTURE,FETCH_PENDING_FUTURE,FETCH_ERROR_FUTURE} from '../../actions/httpActions/http.const';


const initialState: any = {
    isFetchingData: true,
    futureData: []
}

export default function FutureWeatherReducer(state = initialState, action: {type:string, payload: any}){
    switch(action.type){
            case FETCH_SUCCESSFUL_FUTURE:
                return {
                    isFetchingData: false,
                    futureData: action.payload
                };
            case FETCH_PENDING_FUTURE:
                return {
                    isFetchingData: true,
                    ...state
                };
            case FETCH_ERROR_FUTURE:
                return state;
            default:
                return state;
        }
}