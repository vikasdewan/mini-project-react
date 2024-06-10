import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState(
        {
            city : "Delhi", 
            feelsLike: 38.5,
            humidity: 14,
            name: "Delhi",
            temp: 40.62,
            tempMax: 41.05,
            tempMin: 40.62,
            weather: "Haze",
          }
    )

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <>
        <div className="WeatherApp">
            <h2>Weather App By Vikas Dewangan</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
        </>
    )
}