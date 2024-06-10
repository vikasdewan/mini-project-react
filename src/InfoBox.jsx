import "./InfoBox.css"
import Card from '@mui/material/Card';
 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

  const INIT_URL = "https://plus.unsplash.com/premium_photo-1667239532950-db28085dacd0?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const HOT_IMG_URL = "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_IMG_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_IMG_URL = "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 

  return (
    <>
      <div className="InfoBox">
         
        <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_IMG_URL : info.temp > 15 ? HOT_IMG_URL : COLD_IMG_URL} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}> 
       <p>Temperature = {info.temp}&deg;C <br /></p>
       <p>Humidity = {info.humidity} g/kg</p>
       <p>Min Temp = {info.tempMin} </p>
       <p>Max Temp = {info.tempMax} </p>
       <p>Weather can be descripted as <b><i>{info.weather}</i></b> and Feelslike <b><i>{info.feelsLike}&deg;C</i></b></p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
      </div>
    </>
  );
}
