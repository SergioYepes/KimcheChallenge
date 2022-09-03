import React, { useEffect, useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Filters from "../filters/Filters"
import { countries } from "../../querys/querys" 
import { client } from "../../App"
import Cards from '../Cards/Cards'
import { useQuery } from "@apollo/react-hooks"

function Home() {
    let [filters,setFiltro]= useState(false)
    //let [paises,setPaises]= useState(null)
    const result=useQuery(countries)
    
    // console.log(countries)
    // client.query({ query })
    // .then(res=>console.log(res))
    // useEffect(()=>{
    //   setPaises(result.data)
    // },[result])
  
  
  // let countries2=paises?.countries
  if (result.error) return <span style="color:red">{result.error}</span>

  // console.log(countries2)
  return (
    <div>
      <h1>
        Country Search{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h1>
      <h2>This is app is to search your country</h2>
      {result.loading && <p>Loading...</p>}
      {/* <Filters setFiltro={setFiltro} countries={result.data?.countries}/> <br/><br/> */}
      <SearchBar countries={result.data?.countries} /> 
      
      {/* <Cards countries={result.data?.countries}/> */}
    </div>
  )
}

export default Home