import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import { useState } from 'react'



const Weather = () => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(null)
    const [data, setData] = useState('')
    const [weatherIcon, setIcon] = useState('')

    let api_key = "b7e706f7cae673fc3674f559a13d6342"

    const handleSearch = async () => {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api_key}`)
        let data = await response.json()
        if (!response.ok) {
            setError(<div className="error-message" style={{ color: 'red', paddingTop: '60px', fontWeight: 'bold', }}>Oops..! Location not found or unavailable.</div>);
            return;
        }else{
            setError(null)
        }
        console.log(data);
        setData(data)
        if(data?.weather[0]?.main == 'Rain'){
            setIcon(rain)
        }else if(data?.weather[0]?.main == 'Clouds'){
            setIcon(cloud)
        }else if(data?.weather[0]?.main == 'Snow'){
            setIcon(snow)
        }
        else if(data?.weather[0]?.main == 'Drizzle'){
            setIcon(drizzle)
        }
        else if(data?.weather[0]?.main == 'Clear'){
            setIcon(clear)
        }
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className='cityInput' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' />
                <div className="search-icon">
                    <img src={search} alt="" onClick={() => { handleSearch() }} />
                </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="weather-image">
                <img src={weatherIcon|| clear} alt="" />
            </div>
            <div className="weather-temp">{Math.floor(data?.main?.temp) || 24 }°C</div>
            <div className="weather-location">{data?.name || 'London' }</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" />
                    <div className="data">
                        <div className="humidity-percent">{Math.floor(data?.main?.humidity) || 64 }%</div>
                        <div className="text">Humidity</div>

                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" />
                    <div className="data">
                        <div className="humidity-percent">{Math.floor(data?.wind?.speed) || 2 }km/hour</div>
                        <div className="text">Wind Speed</div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Weather