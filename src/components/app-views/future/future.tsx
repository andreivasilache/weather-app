import React , { Component } from 'react';

import urls from '../../../helpers/apiService/urls';
import * as api from '../../../helpers/apiService/api.service';
import parseWeatherData from '../../../helpers/apiService/parseWeatherData';


class FutureComponent extends Component{
    componentDidMount(){
        /*
            Gets data for next 5 days, data is generated in 3 by 3 hours format.
            First day = 8 timestamps * 3 hours each. 
            We are receiving 39 timestamps
        */
        api.get(urls.fiveDaysApi).then((fiveDaysData:any)=>{
            const dataList: any = fiveDaysData.data.list;
            const parsedByDays = [];
            for(let byDayIndex = 7; byDayIndex < 40; byDayIndex+=8){
                const currentDayData = [];
                for(let threeHrsWeather = byDayIndex+1;( threeHrsWeather <= byDayIndex + 8) && (threeHrsWeather < 40);threeHrsWeather++){
                    currentDayData.push(parseWeatherData(dataList[threeHrsWeather]))
                }
                parsedByDays.push(currentDayData);
            }
        })
    }
    
    render(){
        return(
            <h1>Future Component works!</h1>
        )
    }
}

export default FutureComponent;