import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "./SearchBox.css"
import { colors } from "@mui/material";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "46e9d7a73090867772b46a60dd37011e";

  let getWeatherInfo = async () => {
   try{
       let response = await fetch(
         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
       );
       let jsonResponse = await response.json();
   
       let result = {
         city: jsonResponse.name,
         temp: jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         feelsLike: jsonResponse.main.feels_like,
         humidity: jsonResponse.main.humidity,
         weather: jsonResponse.weather[0].main,
       };
   
       console.log(result);
       return result
    }catch(err){
        throw(err);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
        setError(true);
    }
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
          className="SearchBox"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" className="SearchBtn">
          Search
        </Button>
        {error && <p style={{color : "red"}}>No such Place exist in our API!</p>}
      </form>
    </>
  );
}
