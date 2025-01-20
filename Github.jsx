import React, { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"

function Github(){
    //const data= useLoaderData()

    //commented for githubInfoLoader
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/FasihaNaveed')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        </div>
        /*
        Before div close
        <img src={data.avator_url} alt="Git picture" width={300} />
        */
    )
}

export default Github

/*
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/FasihaNaveed')
    return response.json()
}
*/
