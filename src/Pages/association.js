/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import moment from "moment"

const Association = () =>{

    const {slug} = useParams()

    const [association,setassociation] = useState(null)
    const [messages,setMessages] =useState([])

    useEffect(()=> {
        fetchassociation()
        fetchmessages()
    },[])

    const fetchassociation = async() =>{
        const response = await fetch(`http://localhost:5000/associations/${slug}`)
        const data = await response.json()
        setassociation(data)
    }

    const fetchmessages = async() =>{
        const response = await fetch("http://localhost:5000/messages")
        const data = await response.json()
        setMessages(data.filter(d=>d.association=slug))
    }

    return (
        <>
            <h1>Association</h1>
            {association && <Card association={association}/>}
            <section>
            {messages.map((message=>{
                return <article>
                    <h2>{message.object}</h2>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
            }))}
            </section>
        </>
    )
}

export default Association