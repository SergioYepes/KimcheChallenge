import React,{ useEffect, useState} from 'react'
import style from "./search.module.css"
import Cards from '../Cards/Cards'
import { BiSearch } from 'react-icons/bi'

function SearchBar({countries}) {
    const[Nombre,setNombre]=useState("")
    const[pais,setPais]= useState(null)
    let [filter,setFiltro]= useState("continent")
   
    
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
            setFiltro("continent")

            setPais(continent)
    }
    function handleFilterLanguage(e){
        e.preventDefault()
        let language=pais?.filter(e=>e.languages[0]?.name).sort(function (a, b) {
            if (a.languages[0].name.toLowerCase() > b.languages[0].name.toLowerCase()) {
                return 1;
            }
            if (b.languages[0].name.toLowerCase() > a.languages[0].name.toLowerCase()) {
                return -1;
            }
            return 0
        })
        console.log(language)
        setFiltro("language")
        setPais(language)
    }
    useEffect(()=>{ 
            if (pais) setPais(pais)
    },[pais])
     if(pais){
        return(
            <>
            <div className={style.contenedorF}>
                <h1 className={style.h1}>Group By</h1>
                <div className={style.filtrosContenedor}>
                    <div className={style.boton_filtro}>
                        <button onClick={e=>handleFilterContinent(e)}>Continent</button>
                        <button onClick={e=>handleFilterLanguage(e)}>Language</button>
                    </div>
                </div> <br/><br/>
                <button className={style.botonReset} onClick={()=>setPais(null)}>new Search</button>
            </div>
                <Cards countries={pais} name={Nombre} filter={filter}/>
            </>
            // 
        )    
    }
  return (
    <div className= {style.contenedor}>
        <form className={style.SearchBar}>
            <input
                className={style.input}
                type="text"
                value={Nombre}
                onChange={e=>handleChange(e)}
                placeholder="Insert Country here..."
            />
            <button className={style.botoncho} onClick={e=>handleClick(e)}><BiSearch/></button>
        </form>
    </div>
  )
}

export default SearchBar