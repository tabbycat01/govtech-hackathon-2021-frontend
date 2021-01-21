import React, { useState, useEffect } from "react"
import Loader from 'react-loader-spinner'



const LoadingComponent = () => {

    const [count, setCount] = useState(".")
   
   useEffect(() => {
    const timer = setInterval(() => count.length > 3 ? setCount("."): setCount(count + "."), 500)
    return () => clearInterval(timer)
   })

    return (
        <div>
            <p>Processing {count}</p>
            <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            />
        </div>
        
    )
}


export default LoadingComponent