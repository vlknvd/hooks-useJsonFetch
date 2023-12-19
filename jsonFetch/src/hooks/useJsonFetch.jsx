import { useState, useEffect } from "react";
export default function useJsonFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setError] = useState(false);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()})
        .then((result) => {
                setIsLoading(false);
                setData(result);
        })
        .catch((error) => {
            setError(error)
        })
          
    }, [url])

    // console.log(data, isLoading, err)

    return [data, isLoading, err]
}