import React, {useState, useEffect} from "react";

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
    }

    useEffect(()=>{
        window.addEventListener('popstate', onLocationChange)
        return () => {
            console.log("Cleaning up Route useEffect")
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return (
        currentPath === path ? children : null
    )
}

export default Route;