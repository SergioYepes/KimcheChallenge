import React from 'react'
import style from "./card.module.css"

function Card({emojiU,name,continent,languages,phone,capital,states}) {
  
  return (
    <div className={style.carta}>
      <div className={style.carta__header}>
        <p className={style.carta__header_p}>{emojiU}</p>
        <h2 className={style.carta__header_h2}>{name}</h2>
        <p className={style.carta__header_p2}>{emojiU}</p>
      </div>
      <div className={style.carta__body}>
        <h3>Oficial Languages: {function(languages){
          if(Array.isArray(languages)){
              let lang=languages.map(e=>e.name)
              return lang.join(", ")
          }
        }(languages)}</h3>
        <h3>Native Languages: {function(languages){
          if(Array.isArray(languages)){
              let lang=languages.map(e=>e.native)
              return lang.join(", ")
          }
        }(languages)}</h3>
        {
          name!== "Sorry but we that country does not exist" ?
          <div>
              <h3>Code Phone Number: {phone}</h3>
              <h3>Capital: {capital}</h3>    
          </div>:
          <></>
        }
        {
          states ? <h3 className={style.states}>Nation States: {function(states){
              if(Array.isArray(states)){
                  let st=states.map(e=>e.name)
                  return st.join(", ")
              }
            }(states)}</h3> 
            : <></>
        }
        <h3>Continents: {continent}</h3>
      </div>
    </div>
  )
}

export default Card
