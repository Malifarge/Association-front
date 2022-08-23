

const Card = (props) =>{
    const {image,name,Slogan,description} = props.association

    return(
        <section className="textecenter">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{Slogan}</p>
            <p>{description}</p>
        </section>
    )
}

export default Card