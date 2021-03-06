import React , { Component } from 'react';
import { connect } from 'react-redux';

import { FetchSuccessToday, FetchPendingToday } from '../../../redux/actions/httpActions/http.actions';
import * as api from '../../../helpers/apiService/api.service';
import urls from '../../../helpers/apiService/urls';
import parseWeatherData from '../../../helpers/apiService/parseWeatherData';

import WeatherComponent from '../../shared/weather/weather.component';
import LoaderComponent from '../../shared/loader/loader.component';
import './today.sass';

const mapStateToProps = (state: any) =>{
    return { todayWeather: state.todayWeather }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addTodayData: (data: any) => dispatch(FetchSuccessToday(data)),
        isFetchingData: (data: any) => dispatch(FetchPendingToday(true))
    }
}

class TodayComponent extends Component{
    componentDidMount(){
         (this.props as any).isFetchingData();
        api.get(urls.todayApi).then((weatherData)=>{
            if(weatherData){
              (this.props as any).addTodayData(parseWeatherData(weatherData.data));
            }
        })
    }

    render(){
        return(
            <div className="weather">
                {   
                    (this.props as any).todayWeather.isFetchigData ? <LoaderComponent /> : 
                    <WeatherComponent weatherData={(this.props as any).todayWeather} />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayComponent);