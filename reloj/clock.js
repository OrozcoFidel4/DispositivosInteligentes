import React, { Component } from 'react';
import { Text } from 'react-native';
import { toWords } from 'number-to-words';
import { capitalizeSentence } from './capitalizeSentence';


export default class Clock extends Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'PM';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'AM';
    }

    var hourText = toWords(hour)
    var minutesText = toWords(minutes)
    var secondsText = toWords(seconds)

    this.setState({ currentTime: capitalizeSentence(hourText) + '\n' + capitalizeSentence(minutesText) + '\n' + capitalizeSentence(secondsText) + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {

    return (
        <Text>{this.state.currentTime}</Text>
    );
  }
}