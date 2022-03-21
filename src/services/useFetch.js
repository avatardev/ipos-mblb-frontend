import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': null
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
    }, [url])

    return {data, isLoading, error}
}
 
export default useFetch;