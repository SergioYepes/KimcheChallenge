import React from 'react'
import Card from "../Card/Card"

function Cards({countries, filterC, filterL}) {
  return (
    <div>
        {countries && countries?.map((countries)=>{
            return(
                <div key={countries.id}>
                    <Card
                        key={countries.id}
                        name={countries.name}
                        emojiU={countries.emoji}
                        continent={countries.continent.name}
                        languages={countries.languages}
                        phone={countries.phone}
                        capital={countries.capital}
                        states={countries.states}
                        filterC={filterC ? countries.continent.name : null}
                        filterL={filterL ? countries.languages[0].name : null}
                    />

                </div>
            )
        })}
    </div>
  )
}

export default Cards