import { useState } from "react"
import { useEffect } from "react"

function useFetch (url) {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        async function fetchDatas() {
            setIsLoading(true)
            const response = await fetch(url)
            const responseData = await response.json()
            if (response.ok) {
                setDatas(responseData)
                setIsLoading(false)
            } else {
                console.log("===")
            }
        }   
        fetchDatas()
    },[url])
    return {datas, isLoading}
}

export default useFetch