import React, { useEffect, useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import style from "./home.module.css"
import { countries } from "../../querys/querys" 
import { client } from "../../App"
import Cards from '../Cards/Cards'
import { useQuery } from "@apollo/react-hooks"

function Home() {
    let [filters,setFiltro]= useState(false)
    const result=useQuery(countries)  
  if (result.error) return <span style="color:red">{result.error}</span>
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.container_h1}>
          Country Search{" "}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </h1>
        <h2 className={style.container_h2}>This app is to search your country</h2>
      </div>
      {result.loading && <p>Loading...</p>}
      {/* <Filters setFiltro={setFiltro} countries={result.data?.countries}/> <br/><br/> */}
     <SearchBar countries={result.data?.countries} />
      {/* <Cards countries={result.data?.countries}/> */}
    </div>
  )
}

export default Home