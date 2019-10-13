export interface Weather{
    location?: string,
    date?: string,
    hour?: string,
    weatherStatus: string,
    weatherDescription: string,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}