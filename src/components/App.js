// create your App component here
import React, { useState, useEffect } from "react"

function App(){
    const [dogs, setDogs] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(jsonArray => { 
            setDogs(jsonArray) 
            setIsLoaded(true)
            return 
        }) 

    }, [])

    if(!isLoaded){
        return <p>Loading....</p>
    }
    
    console.log(dogs)

    return (
        <img src={ dogs.message } alt="A Random Dog"/>
    )
}


export default App 