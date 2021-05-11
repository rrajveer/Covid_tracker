import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) =>{
  let changeURL = url
  if(country){
     changeURL = `${url}/countries/${country}`
   }
  
    try{
        const { data:{ confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeURL)
        return { confirmed, recovered, deaths, lastUpdate};
      }catch(error){
        console.log(error.message)
      }
  
}

export const fetchDailyData = async(country) =>{
  let changeURL = url
  if(country){
     changeURL = `${url}/countries/${country}`
   }
  try{
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) =>(
          {
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,

          }))
          console.log(modifiedData)
        return modifiedData
   }catch(error){
    console.log(error.message)
  }
}

export const fetchCountries = async() =>{
  try{
        const { data:{ countries} } = await axios.get(`${url}/countries`)
        return(countries.map((country) => country.name))

  }catch(error){
    console.log(error.message)
  }
}