import { useState, useEffect } from "react"
import moment from "moment"

const Admin = () =>{
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        fetchmessages()
    },[])

    const fetchmessages = async() =>{
        const response = await fetch("http://localhost:5000/messages")
        const data = await response.json()
        setMessages(data)
    }

    return (
        <>
        <h1>Admin</h1>
        <section>
            <h2>Konexio</h2>
             {/* eslint-disable-next-line */}
            {messages.map((message=>{
                if (message.association === "konexio"){
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
                }
            }))}
        </section>
        <section>
            <h2>UNICEF</h2>
             {/* eslint-disable-next-line */}
            {messages.map((message=>{
                if (message.association === "unicef"){
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
                }
            }))}
        </section>
        <section>
            <h2>Les restos du coeur</h2>
             {/* eslint-disable-next-line */}
            {messages.map((message=>{
                if (message.association === "les-restos-du-coeur"){
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
                }
            }))}
        </section>


        </>
    )
}

export default Admin