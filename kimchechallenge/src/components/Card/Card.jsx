import React from 'react'

function Card({emojiU,name,continent,languages,phone,capital,states,filterC,filterL}) {
  
  return (
    <div>
      <h1>{filterC}</h1>   
      <h1>{filterL}</h1>
      <div>{emojiU}</div>
      <h2>{name}</h2>
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
        states ? <h3>Nation States: {function(states){
            if(Array.isArray(states)){
                let st=states.map(e=>e.name)
                return st.join(", ")
            }
          }(states)}</h3> 
          : <></>
      }
      <h3>Continents: {continent}</h3>
    </div>
  )
}

export default Card
