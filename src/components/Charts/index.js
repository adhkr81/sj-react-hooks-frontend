import { useEffect, useState } from "react"
import axios from "axios"


export function Charts() {

    const [getAll, setGetAll] = useState({})
    const [states, setStates] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getResponse () {
            try {
                let response = await axios.get("https://js-backend-trial.herokuapp.com/allstates")   
                 setGetAll(response.data)
                 setStates(Object.keys(response.data))
                 setIsLoading(false)

            } catch(err) {
                 return console.log('err')
            }
       }
       getResponse()        
    },[])


    return (
        <>
        {isLoading && 
            (<div>Loading</div>)}
        
        {isLoading === false && 
            (<div>
                {states.map((state) => {return <div key={state}>{state}</div>})}
            </div>)}
        </>
    )
}