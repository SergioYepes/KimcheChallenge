import React,{ useEffect, useState} from 'react'
import Filters from "../filters/Filters"
import Cards from '../Cards/Cards'

function SearchBar({countries}) {
    const[Nombre,setNombre]=useState("")
    const[pais,setPais]= useState(null)
    let [filterC,setFiltroC]= useState(false)
    let [filterL,setFiltroL]= useState(false)
   
    
    function handleChange(e) {
        e.preventDefault()
        setNombre(e.target.value)
    }
    function handleClick(e) {
        e.preventDefault()
        if(Nombre==="") alert("please insert country name")
        else if(Nombre){
            let filt=countries?.filter(e=>e.name.toLowerCase().includes(Nombre.toLowerCase()))
            if(!filt.length){
                alert("Country not found") 
            }
            setPais(filt)
        } 
        setNombre("")
    }
    function handleFilterContinent(e){
            e.preventDefault()
            let continent=pais?.filter(e=>e.continent.name).sort(function (a, b) {
                if (a.continent.name.toLowerCase() > b.continent.name.toLowerCase()) {
                    return 1;
                }
                if (b.continent.name.toLowerCase() > a.continent.name.toLowerCase()) {
                    return -1;
                }
                return 0
            })
            setFiltroC(true)
            setFiltroL(false)
            setPais(continent)
    }
    function handleFilterLanguage(e){
        e.preventDefault()
        let language=pais?.filter(e=>e.languages[0].name).sort(function (a, b) {
            if (a.languages[0].name.toLowerCase() > b.languages[0].name.toLowerCase()) {
                return 1;
            }
            if (b.languages[0].name.toLowerCase() > a.languages[0].name.toLowerCase()) {
                return -1;
            }
            return 0
        })
        console.log(language)
        setFiltroL(true)
        setFiltroC(false)
        setPais(language)
    }
    useEffect(()=>{ 
            setPais()
    },[])
     if(pais){
        return(
            <>
            <div>
                <h1>Group By</h1>
                <button onClick={e=>handleFilterContinent(e)}>Continent</button>
                <button onClick={e=>handleFilterLanguage(e)}>Language</button>
            </div> <br/><br/>
            <button onClick={()=>setPais(null)}>new Search</button>
            <Cards countries={pais} filterL={filterL} filterC={filterC}/>
            </>
        )    
    }
  return (
    <div>
        <form>
            <input
                className="searchBar"
                type="text"
                value={Nombre}
                onChange={e=>handleChange(e)}
                placeholder="Insert Country here..."
            />
            <button className="SearchButton" onClick={e=>handleClick(e)}>Search</button>
        </form>
    </div>
  )
}

export default SearchBar