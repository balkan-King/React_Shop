import React, {useState, useEffect} from 'react'
import withNavbar from './components/hoc/withNavbar/withNavbar';
import CityCards from './components/cityCards/CityCards';


const WeatherApi = () => {

  let cityData = {};
      
   const addNewCity = e => {
     e.preventDefault();
     let cityName = document.getElementById("cityName").value;
     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=a751ef3c1f5e5ae339aca36990024815')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      cityData = data;
      /*
        var celcius = Math.round((parseFloat(data.main.temp)-273.15)*10)/10;
        let html = "<div className='card'><div className='card-header '>" + (data.name + "(" + data.sys.country + ")") + "</div><div id='temp' className='card-body'>" + celcius + "&deg;</div><div id='main' className='card-footer'>" + data.weather[0].main + "</div></div>";
        let div = document.createElement("div");           
        div.className = "col-sm-3";
        div.innerHTML = html;
        let extendedArray = cityArray.push(div);
        setCityArray(extendedArray);
        console.log(getCityArray());       
        */
    })
    .catch(function() {
        // catch any errors
    });
   }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
              <div>
                <input type="text" id="cityName" className="marginTopForm"></input>     
                <button type="submit" onClick={addNewCity}>City</button>
              </div>
            <CityCards data={cityData}/>  
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div> 
    )
}

export default withNavbar(WeatherApi)
