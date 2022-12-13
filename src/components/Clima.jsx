import React,{useState} from 'react'

const Clima = () => {
    const [temperatura,setTemperatura] = useState(null)

    function buscarClima(e){
        e.preventDefault()
        const city = e.target.ciudad.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d1be3c9f2af2c61caf979fed4ef6117&units=metric`
        fetch(url)
            .then(res =>res.json())
            .then(data => setTemperatura(data.main.temp))
        
    }
  return (
    <div>
        <h2>App Clima</h2>
        <form onSubmit={buscarClima}>
            <input type="text" id="ciudad" placeholder='Ingresa la ciudad'/>
            <button>Consultar</button>
        </form>
        <div>
            <h2 className='temperatura'>{temperatura}°C</h2>
        </div>
    </div>
  )
}

export default Clima