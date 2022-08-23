
import { useState ,useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () =>{
    const[associations, setAssociations] = useState([])

    const fetchassociations = async ()=>{
        const response = await fetch("http://localhost:5000/associations")
        const data= await response.json()
        setAssociations(data) 
    }

    useEffect(()=>{
        fetchassociations()
    },[])

    return (
         <>
         <h1>Nos associations</h1>

         <section className="flex wrap s-b">

            {associations.map((association=>{
                const {name,image,slug}= association
                return <article key={name}>
                    <img src={image} alt={name} />
                    <Link to={`/${slug}`}><h2>{name}</h2></Link>
                </article>
            }))}

         </section>
         </>

    )
}

export default Home