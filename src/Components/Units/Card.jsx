import { Typography } from "@mui/material";
import "./Card.css"
// import styles from "../Units/Card.module.css"; // Assuming you have a CSS file for styles
const Card = ({ data }) => {
  const {
    location,
    current: {
      condition,
      icon,
      temp_c: tempC,
      temp_f: tempF,
      uv,
      wind_degree: windDegree,
      wind_dir: windDirection,
      wind_kph: windKPH,
      wind_mph: windMph,
      last_updated: lastUpdate,
      pressure_in: pressureIN,
      pressure_mb: pressureMB,
      humidity,
      cloud,
      air_quality: airQuality,
      precip_in: precipIN,
      precip_mm: precipMM,
      is_day: isDay,
      vis_km: visKM,
      vis_miles: visM,
      

    },
  } = data;

  const locationStyle = {
    textAlign: 'center',
    textDecoration: 'underline',
    textDecorationThickness: 'thick',
    textDecorationColor: 'white',
    textShadow: '0 0 4px white',
    padding: '2px',
    textUnderlineOffset: '0.3em',
  };

  return (
    <div className="mainCard">
      <div>
        <Typography variant="h3" component="div" sx={locationStyle}>
          {location.name}, {location.country}
        </Typography>
        <Typography variant="h5" component="p" sx={locationStyle}>
          Last updated: {lastUpdate}
        </Typography>
        
      </div>
      <div className="cardicon">
          <img src={condition.icon} alt="Weather Icon" />
        </div>
      <div >
        <div className="cardContent">

          {/* <h3>Weather in {location.name} is</h3> */}

          <div className="weather-card">
            <h3>Temperature</h3>
            <p>{tempC}°C </p>
          </div>
          <div className="weather-card">
            <h3>Humidity</h3>
            <p>{humidity}%</p>
          </div>
          <div className="weather-card">
            <h3>Condition</h3>
            <p>{condition.text}</p>
          </div>
          <div className="weather-card">
            <h3>Wind</h3>
            <p>Wind: {windKPH} kph</p>
          </div>
          
          
        </div>
        {/* <div className="airQuality">
          <h4>Air quality</h4>
          <p> gb-defra-index: {airQuality['gb-defra-index']}</p>
          <p> us-epa-index: {airQuality['us-epa-index']}</p>
          <p> co: {airQuality.co}</p>
          <p> no2: {airQuality.no2}</p>
          <p> o3: {airQuality.o3}</p>
          <p> pm2_5: {airQuality.pm2_5}</p>
          <p> so2: {airQuality.so2}</p>
        </div> */}
      </div>
      {/* <div className="additionalSection">
        <div className="extra">
          <p>Pressure</p>
          <span>{pressureIN}/{pressureMB}</span>
        </div>
        <div className="extra">
             <p>Coordinates</p>
             <span>lat:{location.lat}°/lon:{location.lon}° </span>
        </div>
        <div className="extra">
          <p>It's</p>
         {isDay===0?(
            <p>Night</p>
          ):(
            <p>Day</p>
          )}
        </div>
        <div className="extra">
        <p>Precepition</p>
          <span>{precipIN}in/{precipMM}mm</span>
        </div>
        
        <div className="extra">
        <p>Visibility</p>
          <span>{visKM}km/{visM}miles</span>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
