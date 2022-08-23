/* eslint-disable react-hooks/exhaustive-deps */

import { useParams,Link } from "react-router-dom"
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
        setMessages(data)
    }

    return (
        <>
            <h1>Association</h1>
            {association && <Card association={association}/>}
            <section>
             {/* eslint-disable-next-line */}
            {messages.map((message=>{
                if (message.association === slug){
                    return <article key={message.date}>
                    <h2>{message.object}</h2>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
                }
            }))}
            </section>

            <Link to={"/Contact"}><button>Envoyer un message</button></Link>
        </>
    )
}

export default Association