import React from 'react'
import Search from '../Search/Search'

 const SearchData = () => {
    //  const [countries,setCountries] = useState(["India","Australia","Singapore","Malaysia"])

     let countrySelected= (item)=>{
         console.log(item)
         
    }
    return (
        <div>
             <Search searchText="Select a Location" selected={countrySelected} type="Location" inputArray={["India","Australia","Singapore","Malaysia","Sri Lanka"]} />
        </div>
    )
}

export default SearchData