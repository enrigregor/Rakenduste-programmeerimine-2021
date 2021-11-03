import React from "react"
import { useState } from "react/cjs/react.development";

function RandomMath({ numberDef }){
    const [working, setWorking] = useState(false);
    const DoMath = () => {
        const number = parseInt(numberDef);
        
        if(number %2 == 0) {
            return (
                number * number
            )
        } else {
            return (
                number * 5
            ) 
        }
    }

    return (
        <>
        <hr></hr>
        <br></br>
            <h1>Paarisarvud ruutu ja paaritud korrutame viiega</h1>
            <h2>Sisestatud number: { numberDef }</h2>
        <h3>{ DoMath() }</h3>
        <hr></hr>
        <button onClick={() => setWorking(!working)}>Set working status</button>
      { working ? 
          <div>You are currently working! 😎</div>
          : 
          <div>You are not working! :((</div> 
      }
        </>
    )
}
export default RandomMath