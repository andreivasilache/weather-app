import {FETCH_SUCCESSFUL_TODAY, FETCH_ERROR_TODAY, FETCH_PENDING_TODAY} from './http.const'
import {FETCH_SUCCESSFUL_TOMORROW, FETCH_ERROR_TOMORROW, FETCH_PENDING_TOMORROW} from './http.const'
import {FETCH_SUCCESSFUL_FUTURE, FETCH_ERROR_FUTURE, FETCH_PENDING_FUTURE} from './http.const'

export function FetchSuccessToday(payload: any){
    return {
        type: FETCH_SUCCESSFUL_TODAY,
        payload
    }
}

export function FetchErrorToday(errorPayload: any){
    return {
        type: FETCH_ERROR_TODAY,
        errorPayload
    }
}

export function FetchPendingToday(pendingPayload: any){
    return{
        type: FETCH_PENDING_TODAY,
        pendingPayload
    }
}

export function FetchSuccessTomorrow(payload: any){
    return {
        type: FETCH_SUCCESSFUL_TOMORROW,
        payload
    }
}

export function FetchErrorTomorrow(errorPayload: any){
    return {
        type: FETCH_ERROR_TOMORROW,
        errorPayload
    }
}

export function FetchPendingTomorrow(pendingPayload: any){
    return{
        type: FETCH_PENDING_TOMORROW,
        pendingPayload
    }
}

export function FetchSuccessFuture(payload: any){
    return {
        type: FETCH_SUCCESSFUL_FUTURE,
        payload
    }
}

export function FetchErrorFuture(errorPayload: any){
    return {
        type: FETCH_ERROR_FUTURE,
        errorPayload
    }
}

export function FetchPendingFuture(pendingPayload: any){
    return{
        type: FETCH_PENDING_FUTURE,
        pendingPayload
    }
}