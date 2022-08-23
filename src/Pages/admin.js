import { useState, useEffect } from "react"
import moment from "moment"

const Admin = () =>{
    const [messagesKonexio,setMessagesKonexio] = useState([])
    const [messagesUnicef,setMessagesUnicef] = useState([])
    const [messagesRestos,setMessagesRestos] = useState([])


    useEffect(()=>{
        fetchmessages()
    },[])

    const fetchmessages = async() =>{
        const response = await fetch("http://localhost:5000/messages")
        const data = await response.json()
        const filtDataKonexio = data.filter((d)=>{
            return  d.association==="konexio"
          })
          const filtDataUnicef = data.filter((d)=>{
            return  d.association==="unicef"
          })
          const filtDataRestos = data.filter((d)=>{
            return  d.association==="les-restos-du-coeur"
          })

        setMessagesKonexio(filtDataKonexio)
        setMessagesRestos(filtDataRestos)
        setMessagesUnicef(filtDataUnicef)
    }

    return (
        <>
        <h1>Admin</h1>
        <section className="textecenter">
            <h2>Konexio</h2>
            {messagesKonexio.map((message=>{
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
            }))}
        </section>
        <section className="textecenter">
            <h2>UNICEF</h2>
            {messagesUnicef.map((message=>{
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
            }))}
        </section>
        <section className="textecenter">
            <h2>Les restos du coeur</h2>
            {messagesRestos.map((message=>{
                    return <article key={message.date}>
                    <h3>{message.object}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p>
                </article>
            }))}
        </section>


        </>
    )
}

export default Admin