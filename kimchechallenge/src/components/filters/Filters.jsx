import React , { useEffect, useState}from 'react'
import Cards from '../Cards/Cards'


function Filters({countries}) {
  const [cont,setCont]= useState(null)
  function handleChange(e){
    e.preventDefault()
    let continent=countries?.filter(e=>e.continent.name)
    setCont(continent)
  }
  useEffect(()=>{
    setCont()
  },[])
  if(countries){
    return(
        <>
        <Filters countries={cont}/> <br/><br/>
        <button onClick={()=>setCont(null)}>return</button>
        <Cards countries={cont}/>
        <button onClick={()=>setCont(null)}>return</button>
        </>
    )    
}

  return (
    <div>
        <h1>Group By</h1>
        <button onClick={e=>handleChange(e)}>Continent</button>
        <button>Language</button>
    </div>
  )
}

export default Filters