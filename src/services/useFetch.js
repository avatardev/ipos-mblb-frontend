import { useState, useEffect } from "react";
const base_url = process.env.REACT_APP_BASE_URL;

const useFetch = (url, changes) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setError(null);
        fetch(`${base_url + url}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('fetch data failed')
            }

            return res.json()
        })
        .then(result => {
            setIsLoading(false);
            setData(result.data);
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
    }, [url, changes])

    return {data, isLoading, error}
}
 
export default useFetch;