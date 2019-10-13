import React , { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FetchPendingFuture, FetchSuccessFourDays } from '../../../redux/actions/httpActions/http.actions';
import parseWeatherData from '../../../helpers/apiService/parseWeatherData';
import WeatherComponent from '../../shared/weather/weather.component';
import urls from '../../../helpers/apiService/urls';
import * as api from '../../../helpers/apiService/api.service';
import './future.sass';
import LoaderComponent from '../../shared/loader/loader.component';


const mapStateToProps = (state:any) =>{
    return { futureWeatherArray: state.futureWeather }
} 

const mapDispatchToProps = (dispatch: any) => {
    return{
        addWeatherForFourDays: (weatherArray: any) => dispatch(FetchSuccessFourDays(weatherArray)),
        pendingFetch: (isFetching: boolean) => dispatch(FetchPendingFuture(isFetching))
    }
}

const sortHours = (unsortedHours: any) => {
    const tbs = unsortedHours.sort((a: any, b: any)=>{
        return Number(a['hour'].slice(0, 3)) - Number(b['hour'].slice(0, 3))
    });
    return tbs;
}

class FutureComponent extends Component{
    componentDidMount(){
        /*
            Gets data for next 5 days, data is generated in 3 by 3 hours format.
            First day = 8 timestamps * 3 hours each. 
            We are receiving 39 timestamps.
        */
       (this.props as any).pendingFetch(true);
        api.get(urls.fiveDaysApi).then((fiveDaysData:any) => {
            const parsedByDays = [];
            const dataList: any = fiveDaysData.data.list;
            for(let byDayIndex = 7; byDayIndex < 40; byDayIndex+=8){
                const currentDayData = [];
                for(let threeHrsWeather = byDayIndex+1;( threeHrsWeather <= byDayIndex + 8) && (threeHrsWeather < 40);threeHrsWeather++){
                    const toBePushed = parseWeatherData(dataList[threeHrsWeather]);
                    toBePushed.date = (dataList[threeHrsWeather].dt_txt as string).slice(0,10);
                    toBePushed.hour = (dataList[threeHrsWeather].dt_txt as string).slice(10);
                    if(toBePushed)  currentDayData.push(toBePushed);
                }
                if(currentDayData && currentDayData.length != 0) parsedByDays.push(currentDayData);
            }
            (this.props as any).addWeatherForFourDays(parsedByDays);
        });
    }
    
    render(){
        return(
            <div>
                {(this.props as any).futureWeatherArray.isFetchingData ? <LoaderComponent /> :
                   <Container>
                   <div>
                       {(this.props as any).futureWeatherArray.futureData.map((weatherOfDay: any, dayIndex:number)=>(
                           <div>
                               <div className="weather__date" key={dayIndex}>{weatherOfDay[0].date}</div>
                               <hr className="weather__underline"/>
                               <Row>
                                   {sortHours(weatherOfDay).map((weather: any, weatherKey:number)=>( 
                                       <Col lg={4}>
                                           { <WeatherComponent weatherData={weather} key={weatherKey}/>}
                                       </Col>
                                   ))}
                               </Row> 
                           </div> 
                       ))}
                   </div>
               </Container>
            }
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FutureComponent);