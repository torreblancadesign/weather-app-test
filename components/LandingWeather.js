


import React from 'react';
import Moment from 'moment';
import axios from 'axios';

class LandingWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: '',
      weather: '',
    };
  }

  componentDidMount() {
    // Get the current time
    let time = Moment().format('h:mm a');
    this.setState({ time });
    // Get the current date
    let date = Moment().format('dddd, MMMM Do YYYY');
    this.setState({ date });
    // Get the current weather
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=London&