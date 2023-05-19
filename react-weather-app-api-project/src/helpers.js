const getIcon = weatherType => {
  let weatherStyle;

  switch (weatherType) {
    case 'lightrainyday':
      weatherStyle = <i className="fas fa-cloud-rain"></i>;
      break;
    case 'clear':
      weatherStyle = <i className="fas fa-sun"></i>;
      break;
    case 'mcloudy':
      weatherStyle = <i className="fas fa-cloud-sun"></i>;
      break;
    case 'cloudy':
      weatherStyle = <i className="fas fa-cloud"></i>;
      break;
    case 'lightrain':
      weatherStyle = <i className="fa-solid fa-cloud-sun-rain"></i>;
      break;
    case 'rain':
      weatherStyle = <i className="fas fa-rain"></i>;
      break;
    case 'snow':
      weatherStyle = <i className="fa-solid fa-snowflake"></i>;
      break;
    case 'ts':
      weatherStyle = <i className="fas fa-bolt"></i>;
      break;
    case 'tsrain':
      weatherStyle = <i className="fas fa-cloud-bolt"></i>;
      break;
    default:
      weatherStyle = <i className="fas fa-sun"></i>;
  }
  return weatherStyle;
};

const convertToFahrenheit = celcius => {
  return celcius + 32;
};

const convertToKelvin = celcius => {
  return celcius + 273.15;
};

const convertUnit = (unit, currentTemp) => {
  let temp;
  switch (unit) {
    case 'celcius':
      temp = currentTemp;
      break;
    case 'fahrenheit':
      temp = convertToFahrenheit(currentTemp);
      break;
    case 'kelvin':
      temp = convertToKelvin(currentTemp);
      break;
  }
  return temp;
};

export { getIcon, convertUnit };
