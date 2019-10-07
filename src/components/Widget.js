import React from 'react';
import './Widget.css';

class Widget extends React.Component {
  constructor(){
    super();
    this.state = {
      "temperature": "29"

    }
  }

  componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=Bb4d7e1fa9d1c3d0899f27b1cf01c93c`;
    console.log(url);
    console.log(this.props.city);

    fetch(url, {
                method: 'GET'
            }).then(results => {
                return results.json();
            }).then(data => {
              console.log('data is ', data);
              this.setState({
                  "status": "success",
                  "city": data.name,
                  "temperature": Math.round(data.main.temp - 273.15),
                  "wind":data.wind.speed,
                  "weather":data.weather[0].main,
                  "description":data.weather[0].description,
                  "icon": data.weather[0].icon
              });
            }).catch(e => console.log('errorrr', e));

  }

render() {
  return this.state.status === "success" ? (
      <div className="widget">
      <img className="icon" src={"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png"} />
      <div className="temperature">
        {this.state.temperature}°C
        <span className="tempf">/ 45°F</span>
      </div>
      <div className="city">{this.state.city}</div>
      <p className="description">{this.state.description}</p>
      <div className="details">Wind: {this.state.wind} km/h</div>
      </div>
  ) :
      <div className="widget">
        <div className="not-found">
          <span className="icon">🤷‍</span>
          <p>Not found</p>
        </div>
      </div>
  }
}

export default Widget;
