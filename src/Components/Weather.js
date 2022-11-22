import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';


function Weather() {

  const myApiKey = "91affeb550c35d52fe801149daf1a10a";

  const [form, setForm] = useState({
    city: "",
    country: ""
  })

  const [weather, setWeather] = useState([]);

  // const map = fetch(
  //   `http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid=${myApiKey}`
  //   ).then((res) => res.json())
  //   .then((data) => data);


  async function weatherData(e){
    e.preventDefault();

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${myApiKey}`
      );
    
    if (form.city == ""){
      alert("Abeg, type something na. Don't type your village name!");
    } 
    
    else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${myApiKey}`
        ).then((res) => res.json())
        .then((data) => data);

        setWeather({data : data});
    }
  }

  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    if(name == "city"){
      setForm({...form, city:value})
    }

    // if(name == "country"){
    //   setForm({...form, country:value})
    // }
    // console.log(form.city, form.country);
  }

  return (
    <div>
        <h1 className='font-bold text-5xl text-white'>Clima &nbsp;
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
        <span class="relative text-white">Weather</span>
        </span>
        &nbsp;App</h1>

        <form>
          <input type="text" name="city" placeholder="City" className='m-10 px-3 py-1 bg-white border shadow-sm border-slate-300 border-rounded-md focus:border-sky-500' onChange={(e) => handleChange(e)}/>
          {/* <input type="text" name="country" placeholder="Country" className='my-4 px-3 py-1 bg-white border shadow-sm border-slate-300 border-rounded-md focus:border-sky-500' onChange={(e) => handleChange(e)}/> */}
          <button className='text-white rounded-full text-black text-slate-500 bg-blue-500 hover:bg-blue-300 px-5 py-2' onClick={(e) => weatherData(e)}>Submit </button>
        </form>

      {
        weather.data != undefined ?

        <div>
          <DisplayWeather data={weather.data}/>
        </div>

        : null
      }

    </div>
  )
}

export default Weather