import React , { Component } from 'react';
import { Weather } from '../../../interfaces/weather';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './weather.components.sass';

class WeatherComponent extends Component<any,any>{
    
    constructor(props: Weather){
        super(props);
        console.log('from weather', props);
    }

    render(){
        return(
            <div className="weather">
                <div className="weather__location">
                    {this.props.weatherData.location} 
                </div>

                <div className="weather__status">
                    {this.props.weatherData.weatherStatus} 
                </div> 
                <div className="weather__status">
                    {this.props.weatherData.hour} 
                </div> 

                <Container className="weather__temperature">
                    <Row>
                        <Col > 
                            <span className="weather__temperature--now">
                               {this.props.weatherData.temp}°C
                            </span>
                         </Col>
                        <Col>
                            <span className="weather__temperature--min">
                               <span>Min</span> {this.props.weatherData.temp_min}°C 
                            </span>
                            <br/>
                            <span className="weather__temperature--max">
                               <span>Max</span> {this.props.weatherData.temp_max}°C 
                            </span>
                        </Col>
                    </Row>
                </Container>            
            </div>
        )
    }
}

export default WeatherComponent;