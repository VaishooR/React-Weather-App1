const API_KEY='37d5943c80df14bff57b0c979d443213';
const makeIconURL=(iconId)=>`http://openweathermap.org/img/wn/${iconId}.png`

const getWeatherData= async(city,units='metric')=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data=await fetch(URL)
    .then((res)=>res.json())
    .then((data)=>data);

    console.log(data);

    const{
        weather,
        main:{temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind:{speed},
        sys:{country},
        name,
    }=data;

    const {description,icon}=weather[0];

    return{
        description,
        iconURL:makeIconURL(icon),temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name
    };
}
export default getWeatherData;




