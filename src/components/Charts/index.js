import { useEffect, useState } from "react"
import axios from "axios"


export function Charts() {


    const [states, setStates] = useState()

    useEffect(() => {
        async function getResponse () {
            try {
                let response = await axios.get("https://js-backend-trial.herokuapp.com/allstates")   
                 setStates(response.data)
            } catch(err) {
                 return console.log('err')
            }
       }
       getResponse()        
    },[])


    console.log(states)

    return (
        <div></div>
    )
}