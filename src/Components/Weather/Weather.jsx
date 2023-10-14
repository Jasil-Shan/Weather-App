import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'



const Weather = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' name="" id=""  placeholder='Search'/>
            <div className="search-icon">
                <img src={search} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud} alt="" />
        </div>
        <div className="weather-temp">24c</div>
        <div className="weather-location">Payyoli</div>
        <div className="data-container">
            <div className="element">
                <img src="" alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default Weather