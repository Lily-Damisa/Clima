import React from 'react';

function DisplayWeather(props) {
    const {data} = props;

const iconurl = "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";

  return (
    <div>
        {
            data.cod != 404 ?
            <React.Fragment>
                <div className='main'>
                    <h2 className='font-bold text-2xl'>{data.name}, {data.sys.country}'s Weather</h2>
                    <p className='text-slate-500 italic'>As of {new Date().toLocaleTimeString()}</p>
                    <h1 className='text-3xl font-medium'>{Math.floor(data.main.temp - 273.15)}
                    <sup>o</sup>C
                    </h1>
                    <p>{data.weather[0].main}</p>

                    <div className='flex justify-center content-center'>
                        <div>
                            <img src={iconurl} />
                        </div>
                        <div>
                            <p>{data.weather[0].description}</p>
                        </div>
                    </div>
                </div>

                <div className='weatherdetails'>
                    <div className='section1 flex gap-10 justify-center'>
                        <div className='grid grid-cols-10 gap-x-2 gap-y-1 rounded'>
                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>High/Low</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {Math.floor(data.main.temp_max - 273.15)} /{""}
                                {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>C

                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Humidity</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {data.main.humidity} %
                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Pressure</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {data.main.pressure} hPa
                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Visibility</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {data.visibility / 1000} km
                            </p>
                        </div>

                        <div className='grid grid-cols-10 gap-x-2 gap-y-1 rounded'>
                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Wind</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {Math.floor((data.wind.speed * 18)/ 5)} km/hr
                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Wind Direction</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {data.wind.deg}<sup>o</sup> deg
                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Sunrise</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                            </p>

                            <h4 className='bg-slate-900/50 text-white col-span-7 p-2'>Sunset</h4>
                            <p className='bg-blue-300 col-span-3 p-2'>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                            </p>
                        </div>             
                    
                    
                    </div>
                </div>
            </React.Fragment>

            : <div>
                <h2>{data.message}</h2>
              </div>
        }
    </div>
  )
}

export default DisplayWeather