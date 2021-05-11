import react, { useEffect, useState } from 'react'
import style from './App.module.css';
import { Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api/index'
import img from './components/image/image.png'

const App = () =>{

  const[data, setData] = useState([])
  const[country,setCountry] = useState('')

  useEffect( async() =>{
    const getData = await fetchData();
    setData(getData)
   
  },[])

  const handleCountryChange = async(countryValue) =>{
    const getData = await fetchData(countryValue);
    
    setData(getData)
    setCountry(countryValue)
    //     console.log(countryValue)
  }
  return (
    <div className={style.container}>
      <img className={style.image}src={img}/>
     <Cards data={data}/>
     <CountryPicker handleCountryChange={handleCountryChange}/>
     <Chart data={data} country={country}/>
     
    </div>
  );
}

export default App;
