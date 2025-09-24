const Card= (props) => {
    return(
        <div class="cardDiv">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.releaseDate}</p>
            <a href = {props.link} target="_blank" className="details">
                <button>Details</button>
            </a>
        </div>
    )
}

export default Card;