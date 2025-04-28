import axios from "axios";
import { useState } from "react";





 export function Weather(){

  const url ='https://api.openweathermap.org/data/2.5/weather';
  const api_key ='8212be6db3c03d2696105a3a8d4ae780';

   const [CityName, setCityName] = useState('')


   const [weather, setWeather] = useState({name:'', main:{temp:0}, weather:[{description:''}]})

   const [bgStyle, setBgstyle] = useState('');




     function handleCityChange(e){
        setCityName(e.target.value);
        console.log(e.target.value);


     }

     function handleSearchclick(){
         
        // fetch data from url
        // axios.get(`url?q=${cityName}&appid=${api_key}`);
         axios.get(url,{params:{
               q:CityName,
               appid:api_key,
               units:'metric'
         }})
         .then(response=>{
             console.log(response.data);
            setWeather(response.data)
         })
     }

    return(
        <div className="container-fluid">
              <div className="mt-4 d-flex justify-content-between">
                 <div className="w-50">
                    <div className="input-group">
                    <input onChange={handleCityChange}   type="text" placeholder="Enter City Name" className="form-control"></input>
                   <button onClick={handleSearchclick} className="bi bi-search btn btn-warning"></button>
                   </div>
                   <div style={{marginTop:'20px', boxShadow:'2px 2px 2px black', padding:'20px' , border:'1px solid black', textAlign:'center', backgroundImage:`url(${(weather.weather[0].description==='mist')?'mist.jpg':'smoke.jpg'})`, color:'white'}}>
                          <h2>{weather.name} - {weather.weather[0].description.toUpperCase()} </h2>
                          <p className="fs-4">{ Math.round(weather.main.temp)} &deg;C <span className="bi bi-sun"></span></p>
                   </div>
                 </div>
              </div>
        </div>
    )
 }


                     // change color dyanamically
//  <div style={{marginTop:'20px', boxShadow:'2px 2px 2px black', padding:'20px' , border:'1px solid black', textAlign:'center', backgroundColor:`${(weather.Weather[0].description=='mist')?'lightcyan':'#00044'}`, color:'white'}}>
//  <h2>{weather.name} - {weather.weather[0].description.toUpperCase()} </h2>
//  <p className="fs-4">{ Math.round(weather.main.temp)} &deg;C <span className="bi bi-sun"></span></p>
// </div>
// </div>
 