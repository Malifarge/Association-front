import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"

const Nav = () =>{
    const [display,setDisplay]= useState("none")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleAdminClick = () =>{
        console.log("block");
        setDisplay("block")
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        if(password === "Admin"){
            console.log("true");
            navigate('/admin')
        }

        setDisplay("none")
        setPassword("")
    }

    return(
        <>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Contact"}>Contact</Link>
            <button onClick={handleAdminClick}>Admin</button>
        </nav>
        <form onSubmit={handleSubmit} style={{
            "display":`${display}`
        }}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handlePasswordChange} value={password}/>
            <button type="submit">valider</button>
        </form>
        </>
    )
}

export default Nav