#!/usr/bin/env node

let axios = require('axios')
axios
  .get('http://api.jirengu.com/getWeather.php', {
    params: {
      city: process.argv[2]
    }
  })
  .then(response => {
    let weather = response.data.results[0].weather_data[0]
    console.log('*', weather.date, response.data.results[0].currentCity)
    console.log('*', weather.temperature, weather.weather)
    console.log('*', weather.wind)
    console.log('*', `pm2.5: ${response.data.results[0].pm25}`)
  }).catch(error => {
    console.log('请输入正确城市名，如：深圳')
  })
