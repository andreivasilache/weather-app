export interface Weather{
    weatherStatus: string,
    weatherDescription: string,
    location?: string,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}