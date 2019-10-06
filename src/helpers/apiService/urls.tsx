
const appId = '8df1c913ab5ff2c62d0a51c7530d634a';
const location = 'Suceava';
const units = 'metric';


const urls = {
    todayApi: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}&units=${units}`,
    fiveDaysApi: `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${appId}&units=${units}`,
}

export default urls;