import React , { Component } from 'react';

import urls from '../../../helpers/apiService/urls';
import * as api from '../../../helpers/apiService/api.service';
import parseWeatherData from '../../../helpers/apiService/parseWeatherData';
import { FetchPendingFuture, FetchSuccessFourDays } from '../../../redux/actions/httpActions/http.actions';
import { connect } from 'react-redux';
import WeatherComponent from '../../shared/weather/weather.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapStateToProps = (state:any) =>{
    return { futureWeatherArray: state.futureWeather.futureData }
} 

const mapDispatchToProps = (dispatch: any) =>{
    return{
        addWeatherForFourDays: (weatherArray: any) => dispatch(FetchSuccessFourDays(weatherArray)),
        pendingFetch: (isFetching: boolean) => dispatch(FetchPendingFuture(isFetching))
    }
}


class FutureComponent extends Component{
    componentDidMount(){
        /*
            Gets data for next 5 days, data is generated in 3 by 3 hours format.
            First day = 8 timestamps * 3 hours each. 
            We are receiving 39 timestamps.
        */
        api.get(urls.fiveDaysApi).then((fiveDaysData:any) => {
            console.log(fiveDaysData);
            const parsedByDays = [];
            const dataList: any = fiveDaysData.data.list;
            for(let byDayIndex = 7; byDayIndex < 40; byDayIndex+=8){
                const currentDayData = [];
                for(let threeHrsWeather = byDayIndex+1;( threeHrsWeather <= byDayIndex + 8) && (threeHrsWeather < 40);threeHrsWeather++){
                    currentDayData.push(parseWeatherData(dataList[threeHrsWeather]))
                }
                parsedByDays.push(currentDayData);
            }
            (this.props as any).addWeatherForFourDays(parsedByDays);
        });
    }
    
    render(){
        return(
            <Container>
                <div>
                    {(this.props as any).futureWeatherArray.map((weatherOfDay:any)=>(
                        <div>
                            <Row>
                                {weatherOfDay.map((weather: any, weatherKey:number)=>( 
                                    <Col>
                                        { <WeatherComponent weatherData={weather} key={weatherKey}/>}
                                    </Col>
                                ))}
                              </Row> 
                        </div> 
                    ))}
                </div>
            </Container>
       
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureComponent);