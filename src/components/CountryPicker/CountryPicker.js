import react, { useEffect, useState } from 'react'
import{ FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountries } from '../../api/index'
import styles from'./CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const[countriesName, setCountriesName] = useState([])
;
    useEffect(() =>{
        const getCountry = async() =>(
            setCountriesName(await fetchCountries())
        )
        getCountry();
    },[setCountriesName])
    // console.log(country)

    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
               <option value="" >Global</option>
                {countriesName.map((country,index) => (
                    <option value={country} key={index} >{country}</option>
                ))}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker
