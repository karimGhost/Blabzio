import React, { useEffect, useState } from 'react';

const WeatherComponent = (props) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null ,country:null,city:null});
  const [temperature, setTemperature] = useState(null);
  const [date, setDate] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { latitude, longitude } = location;
        if (latitude && longitude) {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true`
          );
          if (response.ok) {
            const data = await response.json();
            const hourlyData = data.hourly;
            setTemperature(hourlyData.temperature_2m[0]);
            setWeatherCondition(hourlyData.weathercode[0]);
            
            setDate(hourlyData.time[0]);
         console.log(data)
         console.log("this is the data", hourlyData.weathercode[0] )
          } else {
            console.error('Failed to fetch weather data');
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {

        console.log("this is your cords", data)
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
          country:data.country,
          city: data.city.slice(0,2)
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  const light = props.light;
  
  if (loading) {
    return <div>Loading...</div>;
  }

  const formattedDate = date ? new Date(date).toLocaleDateString() : '';
  const weatherIcon = getWeatherIcon(weatherCondition);

  
  return (
    <div className='weather' style={{ display: 'flex', color: 'red' }}>
     
      {temperature && date && weatherIcon ? (
        

        <ul style={{display:"flex", listStyle:"none"}} className='bodweather pl-1 '>
         <p  style={{marginTop:"-5px",fontFamily:"fantasy", color:"orange"}}   className={`pforcast pweather mb-0 color-dark ${light ?   "color-light" : "#141515" }`}>
         Forecast
         </p>
         <li className='pr-2 pl-3 pweather'>{formattedDate}/  </li> <li className=' pweather pr-2'>{temperature}°C  </li>  <li className='pr-3 pweather' >{weatherIcon} </li>  <li className='pr-1 pweather'> <span className='locat'>Location:</span> <span className='locat'>{location.country},</span> <span className='locat'>{location.city}</span> </li>  
        </ul>
      ) : (
       
      
        <p className="text-danger pweather">24°C</p>
      )}
    </div>
  );
};

// Helper function to get the weather icon based on the weather code
const getWeatherIcon = (weatherCode) => {
  const weatherIcons = {

      0: '⛈️',
      1: '⛈️',
      2: '⛈️',
      3: '⛈️',
      4: '⛈️',
      5: '⛈️',
      6: '⛈️',
      7: '⛈️',
      8: '⛈️',
      9: '❄️',
      10: '❄️',
      11: '❄️',
      12: '⛈️',
      13: '⛈️',
      14: '⛈️',
      15: '🌬️',
      16: '🌬️',
      17: '🌬️',
      18: '🌬️',
      19: '🌬️',
      20:  '☁️',
      21:  '☁️',
      22: '⛈️',
      23: '⛈️',
      24: '⛈️',
      25: '⛈️',
      26: '⛈️',
      27: '⛈️',
      28: '⛈️',
      29: '⛈️',
      30: '⛈️',
      31: '⛈️',
      32: '⛈️',
      33: '⛈️',
      34: '⛈️',
      35: '❄️',
      36: '❄️',
      37: '❄️',
      38: '❄️',
      39: '❄️',
      40: '⛈️',
      41: '⛈️',
      42: '⛈️',
      43: '⛈️',
      44: '⛈️',
      45: '⛈️',
      46: '⛈️',
      47: '⛈️',
      48: '⛈️',
      49: '⛈️',
      50: '⛈️',
      51: '⛈️',
      52: '⛈️',
      53: '⛈️',
      54: '⛈️',
      55: '⛈️',
      56: '⛈️',
      57: '⛈️',
      58: '⛈️',
      59: '⛈️',
      60: '❄️',
      61: '☁️',
      62: '❄️',
      63: '❄️',
      64: '⛈️',
      65: '⛈️',
      66: '⛈️',
      67: '⛈️',
      68: '⛈️',
      69: '⛈️',
      70: '⛈️',
      71: '⛈️',
      72: '⛈️',
      73: '⛈️',
      74: '⛈️',
      75: '⛈️',
      76: '⛈️',
      77: '⛈️',
      78: '⛈️',
      79: '⛈️',
      80: '⛈️',
      81: '⛈️',
      82: '⛈️',
      83: '⛈️',
      84: '⛈️',
      85: '⛈️',
      86: '🌬️',
      87: '⛈️',
      88: '⛈️',
      89: '⛈️',
      90: '⛈️',
      91: '⛈️',
      92: '⛈️',
      93: '⛈️',
      94: '⛈️',
      95: '⛈️',
      96: '⛈️',
      97: '⛈️',
      98: '⛈️',
      99: '⛈️',
      100: '⛈️',
      101: '⛈️',
      102: '⛈️',
      103: '❄️',
      104: '❄️',
      105: '❄️',
      106: '⛈️',
      107: '⛈️',
      108: '⛈️',
      109: '🌬️',
      110: '🌬️',
      111: '🌬️',
      112: '⛈️',
      113: '⛈️',
      114: '⛈️',
      115: '⛈️',
      116: '⛈️',
      117: '⛈️',
      118: '⛈️',
      119: '⛈️',
      120: '⛈️',
      121: '🌬️',
      122: '🌬️',
      123: '🌬️',
      124: '🌬️',
      125: '🌬️',
      126: '🌬️',
      127: '⛈️',
      128: '⛈️',
      129: '⛈️',
      130: '⛈️',
      131: '⛈️',
      132: '⛈️',
      133: '⛈️',
      134: '⛈️',
      135: '⛈️',
      136: '⛈️',
      137: '⛈️',
      138: '⛈️',
      139: '⛈️',
      140: '⛈️',
      141: '⛈️',
      142: '⛈️',
      143: '⛈️',
      144: '⛈️',
      145: '⛈️',
      146: '❄️',
      147: '❄️',
      148: '❄️',
      149: '⛈️',
      150: '⛈️',
      151: '⛈️',
      152: '⛈️',
      153: '⛈️',
      154: '⛈️',
      155: '❄️',
      156: '❄️',
      157: '❄️',
      158: '❄️',
      159: '❄️',
      160: '❄️',
      161: '⛈️',
      162: '⛈️',
      163: '⛈️',
      164: '⛈️',
      165: '⛈️',
      166: '⛈️',
      167: '⛈️',
      168: '⛈️',
      169: '⛈️',
      170: '⛈️',
      171: '⛈️',
      172: '⛈️',
      173: '⛈️',
      174: '⛈️',
      175: '⛈️',
      176: '⛈️',
      177: '⛈️',
      178: '⛈️',
      179: '⛈️',
      180: '⛈️',
      181: '⛈️',
      182: '⛈️',
      183: '⛈️',
      184: '⛈️',
      185: '⛈️',
      186: '⛈️',
      187: '⛈️',
      188: '⛈️',
      189: '⛈️',
      190: '⛈️',
      191: '⛈️',
      192: '⛈️',
      193: '⛈️',
      194: '⛈️',
      195: '⛈️',
      196:  '⛈️',
       197: '⛈️',
     198: '⛈️',
      199:  '⛈️', 

 
  };

  return weatherIcons[weatherCode] || '';
};

export default WeatherComponent;
