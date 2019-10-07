import React from 'react';
import NotFound from './NotFound';
import Weather from './Weather';
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
            }).catch(e => this.setState({
              "status": "notfound"
            }));

  }

render() {

    if(this.state.status === "success") {
      return (
        <Weather data={{...this.state}} />
      );
    } else if (this.state.status === "notfound") {
      return (
        <NotFound />
      );
    } else {
      return (
        <div className="widget">
          Loading...
        </div>
      );
    }
  }
}

export default Widget;
