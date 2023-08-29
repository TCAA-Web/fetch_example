import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,windspeed_10m&daily=sunrise,precipitation_sum&timezone=Europe%2FBerlin'
    fetch(url).then(res => res.json()).then(data => setData(data))

  },[])

  console.log("data: ", data)

  return (
    <>
      <div>
        <h3>Timezone: </h3>
        <p>{data.timezone}</p>

        <div>
          <h3>Sunrise: </h3>
          {data && data.daily && data.daily.sunrise.map((item, index) => {
              return (
                <p key={index}>{item.substring(11,16)}</p>
              )
          })}
        </div>
      </div>
    </>
  )
}

export default App
