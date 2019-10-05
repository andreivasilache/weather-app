import React , { Component } from 'react';

import * as api from '../../../helpers/apiService/api.service';
import urls from '../../../helpers/apiService/urls';
import { connect } from 'react-redux';
import { FetchSuccessToday } from '../../../redux/actions/httpActions/http.actions';
import parseWeatherData from '../../../helpers/apiService/parseWeatherData';

const mapStateToProps = (state: any) =>{
    console.log(state.todayWeather.weather);
    return { todayWeather: state.todayWeather.weather }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addTodayData: (data: any) => dispatch(FetchSuccessToday(data))
    }
}

class TodayComponent extends Component{
    componentDidMount(){
        api.get(urls.todayApi).then((weatherData)=>{
            if(weatherData){
                console.log(parseWeatherData(weatherData.data));
            }
        })
    }
    render(){
        return(
            <div>
            {  
                (this.props as any).todayWeather
            }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayComponent);