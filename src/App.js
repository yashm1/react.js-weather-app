import React from "react";
import Weather from "./weather";
import Titles from "./titles";
import Form from "./forms";

class App extends React.Component {
  state = {
    temprautre: undefined,
    Humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=0bd33d9a24a5d6bdfcac35ced705759d`
    );
    const data = await api_call.json();
    // console.log(data);
    if (data.message === 'city not found')
    {
      this.setState({
        
        Humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        temprature: undefined,
        error: "City not found"
      });
    }
    else if (city && country) {
      this.setState({
        temprature: data.main.temp,
        Humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temprature: undefined,
        Humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter the  value"
      });
    }
  };
  
  render() {
    return (
      <div>
        <div className="wapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temprature={this.state.temprature}
                    Humidity={this.state.Humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
