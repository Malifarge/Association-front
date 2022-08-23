
import { useState } from "react"

const Contact = () =>{

    const [object,setObject] =useState("")
    const [content,setContent]=useState("")
    const [association,setAssociation]=useState("konexio")

    const handleObjectChange = e =>{
        setObject(e.target.value)
    }
    const handleContentChange = e =>{
        setContent(e.target.value)
    }

    const handleAssociationChange = e =>{
        setAssociation(e.target.value)
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        const mes = {
            object,
            content,
            association
        }
        const request = await fetch(`http://localhost:5000/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(mes)
          })
          const response = await request.json()
          console.log(response);
    } 

    return (
         <>
         <h1>Contact</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="object">Objet</label>
            <input type="text" name="object" onChange={handleObjectChange}/>
            <label htmlFor="content">message</label>
            <input type="text" name="content" onChange={handleContentChange}/>
            <select onChange={handleAssociationChange}>
                <option value="konexio">Konexio</option>
                <option value="unicef">UNICEF</option>
                <option value="les-restos-du-coeur">Les restos du coeur</option>
            </select>
            <button type="input" >Envoyer</button>
         </form>
         </>
         
    )
}

export default Contact