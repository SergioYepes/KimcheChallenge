import React, { useEffect, useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import style from "./home.module.css"
import { countries } from "../../querys/querys" 
import { useQuery } from "@apollo/react-hooks"

function Home() {
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
        <h2 className={style.container_h2}>This app is to search your country only in english</h2>
      </div>
      {result.loading && <p>Loading...</p>}
     <SearchBar countries={result.data?.countries} />
    </div>
  )
}

export default Home