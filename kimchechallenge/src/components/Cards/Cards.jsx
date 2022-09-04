import React from 'react'
import Card from "../Card/Card"
import style from "./cards.module.css"

function Cards({countries, name ,filter}) {

    let aux =[]
      
    name && countries.forEach(e => {
        if (filter==="language") {
            if (e.languages[0]) {
                if (!aux.includes(e.languages[0]?.name)) {
                    aux.push(e.languages[0]?.name)
                }
            }
        } else if(filter === "continent") {
            if (e.continent)
                if (!aux.includes(e.continent?.name)) {
                    aux.push(e.continent.name)
                }
        }
    });
    aux.sort(function (a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        if (b.toLowerCase() > a.toLowerCase()) {
            return -1;
        }
        return 0
    })
    
    
  return (
    <div className={style.cartas}>
        {name ? aux.length>0 ? aux?.map((countriess)=>{
            return(
                <div>
                    <p className={style.Grupo_cartas_nombre}>{countriess}</p>
                    <div key={countriess} className={style.Grupo_cartas}>
                    
                    {countries?.map(c=>{
                        if(c.languages[0]?.name === countriess || c.continent?.name === countriess){
                        return(
                            <Card
                                key={c.name}
                                name={c.name}
                                emojiU={c.emoji}
                                continent={c.continent.name}
                                languages={c.languages}
                                phone={c.phone}
                                capital={c.capital}
                                states={c.states}
                            />
                             )
                        }
                    })} 
                    </div>
                </div>
                    )
        })
        :
                    <h1 className={style.notResults}>No results found</h1>
                :
                null
    }
    </div>
  )
}

export default Cards