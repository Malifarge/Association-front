/* eslint-disable react-hooks/exhaustive-deps */

import { useParams,Link,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import moment from "moment"

const Association = () =>{

    const {slug} = useParams()

    const [association,setassociation] = useState(null)
    const [messages,setMessages] =useState([])

    const navigate = useNavigate()

    useEffect(()=> {
        fetchassociation()
        fetchmessages()
    },[])

    const fetchassociation = async() =>{
        const response = await fetch(`http://localhost:5000/associations/${slug}`)
        const data = await response.json()
        setassociation(data)
        if(!data.image){
            navigate('*')
        }
    }

    const fetchmessages = async() =>{
        const response = await fetch("http://localhost:5000/messages")
        const data = await response.json()
        const filtData = data.filter((d)=>{
          return  d.association===slug
        })
        setMessages(filtData)
    }

    return (
        <>
            <h1>Association</h1>
            {association && <Card association={association}/>}
            <section className="textecenter">
                <h2>messages</h2>
                {messages.length>0 ? <>
                {messages.map((message=>{

                return <article key={message.date}>
                <h3>{message.object}</h3>
                <p>{message.content}</p>
                <p>{moment(message.date).format("DD/MM/YYYY à hh:mm:ss")}</p> 
                </article>

                }))}
                </>
                :
                <p>Pas de message</p> }

            </section>

            <section className="flex jcc m-t-50">
                <Link to={"/Contact"}><button>Envoyer un message</button></Link>
            </section>
        </>
    )
}

export default Association