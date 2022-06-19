import React, { useEffect, useState } from "react"
import axios from "axios"

const ApiTester = () => {

    const [title, setTitle] = useState('')

    const fetchTitle = async () => {
        console.log("ApiTester called")
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data)
        setTitle(response.data.title)
    }

    useEffect(() => {
        fetchTitle()
    }, [])


    return <>
        <p>ApiTester</p>
        <p>{title}</p>
    </>

}

export default ApiTester